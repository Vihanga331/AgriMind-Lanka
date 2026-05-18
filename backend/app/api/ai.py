from fastapi import APIRouter

from app.services.ai_service import ai_service
from app.services.mock_data import sensor_packet

router = APIRouter(prefix="/ai", tags=["ai"])


@router.post("/crop-health")
async def crop_health(payload: dict):
    return await ai_service.crop_health(
        crop=payload.get("crop", "Tomato"),
        district=payload.get("district", "Nuwara Eliya"),
        sensor_data=payload.get("sensorData", sensor_packet()),
    )


@router.post("/buyer-recommendation")
async def buyer_recommendation(payload: dict):
    return await ai_service.buyer_recommendation(payload.get("goal", "fresh vegetable procurement"))
