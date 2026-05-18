import asyncio

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from app.api import ai, analytics, auth, marketplace
from app.core.config import settings
from app.core.database import Base, engine
from app.models import entities  # noqa: F401
from app.services.mock_data import sensor_packet

app = FastAPI(title=settings.app_name, version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin, "http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api")
app.include_router(marketplace.router, prefix="/api")
app.include_router(ai.router, prefix="/api")
app.include_router(analytics.router, prefix="/api")


@app.on_event("startup")
def startup() -> None:
    Base.metadata.create_all(bind=engine)


@app.get("/health")
async def health():
    return {"status": "ok", "app": settings.app_name}


@app.websocket("/ws/iot")
async def iot_stream(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            await websocket.send_json(sensor_packet())
            await asyncio.sleep(2)
    except WebSocketDisconnect:
        return
