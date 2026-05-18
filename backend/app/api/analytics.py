from fastapi import APIRouter

from app.services.mock_data import sensor_packet

router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/dashboard")
async def dashboard():
    latest = sensor_packet()
    return {
        "latest": latest,
        "stats": {
            "activeFarms": 128,
            "cropLots": 342,
            "buyerOrders": 86,
            "overproductionAlerts": 9,
        },
        "forecast": [
            {"month": "Jun", "yield": 72, "demand": 66},
            {"month": "Jul", "yield": 76, "demand": 72},
            {"month": "Aug", "yield": 88, "demand": 81},
            {"month": "Sep", "yield": 84, "demand": 92},
            {"month": "Oct", "yield": 91, "demand": 96},
        ],
    }
