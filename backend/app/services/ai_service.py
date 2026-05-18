from app.core.config import settings


class AIService:
    async def crop_health(self, crop: str, district: str, sensor_data: dict) -> dict:
        if not settings.openai_api_key:
            return self._mock_crop_health(crop, district, sensor_data)
        return self._mock_crop_health(crop, district, sensor_data)

    async def buyer_recommendation(self, goal: str) -> dict:
        return {
            "title": "AI Buyer Recommendation",
            "summary": f"For {goal}, prioritize farms with quality scores above 90, stable moisture history, and low disease risk.",
            "recommendedCrops": ["Ceylon Tomato", "Organic Carrot", "Red Onion"],
            "confidence": 0.91,
        }

    def _mock_crop_health(self, crop: str, district: str, sensor_data: dict) -> dict:
        risk = sensor_data.get("diseaseRisk", 24)
        moisture = sensor_data.get("soilMoisture", 66)
        return {
            "crop": crop,
            "district": district,
            "healthScore": round(96 - risk * 0.32, 1),
            "diseaseRisk": risk,
            "yieldPrediction": "High quality harvest expected in 18-24 days",
            "irrigation": "Irrigate lightly tonight" if moisture < 58 else "Maintain current irrigation cycle",
            "fertilizer": "Use potassium-rich blend after next moisture cycle",
            "seasonalCrop": "Capsicum and tomato demand expected to rise next season",
            "overproductionRisk": "Medium: stagger harvest batches to avoid district-level glut",
            "confidence": 0.89,
        }


ai_service = AIService()
