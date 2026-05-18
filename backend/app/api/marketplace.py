from fastapi import APIRouter

from app.services.mock_data import CROPS, EQUIPMENT

router = APIRouter(prefix="/marketplace", tags=["marketplace"])


@router.get("/crops")
async def crops():
    return CROPS


@router.get("/equipment")
async def equipment():
    return EQUIPMENT


@router.post("/orders")
async def create_order(payload: dict):
    return {"id": 1001, "status": "pending", "deliveryEta": "48 hours", **payload}
