from random import choice, randint, uniform


def sensor_packet() -> dict:
    moisture = round(uniform(48, 82), 1)
    temp = round(uniform(24, 34), 1)
    humidity = round(uniform(58, 88), 1)
    disease_risk = max(8, min(76, round((humidity - 55) * 0.9 + (32 - temp) * 1.4 + randint(-6, 8), 1)))
    return {
        "soilMoisture": moisture,
        "temperature": temp,
        "humidity": humidity,
        "waterLevel": round(uniform(42, 91), 1),
        "sunlight": round(uniform(55, 96), 1),
        "cropGrowthScore": round(uniform(78, 96), 1),
        "diseaseRisk": disease_risk,
        "status": choice(["optimal", "stable", "watch"]),
    }


CROPS = [
    {"id": 1, "name": "Ceylon Tomato", "district": "Nuwara Eliya", "price": 360, "quality": 94, "farmer": "Amal Perera", "quantity": 1200},
    {"id": 2, "name": "Organic Carrot", "district": "Badulla", "price": 290, "quality": 91, "farmer": "Nimali Silva", "quantity": 860},
    {"id": 3, "name": "Green Chilli", "district": "Anuradhapura", "price": 520, "quality": 88, "farmer": "Ruwan Jayasuriya", "quantity": 420},
    {"id": 4, "name": "Red Onion", "district": "Jaffna", "price": 430, "quality": 90, "farmer": "S. Tharmika", "quantity": 970},
]


EQUIPMENT = [
    {"id": 1, "name": "Mini Tractor", "district": "Kandy", "rate": 8500, "status": "available"},
    {"id": 2, "name": "Drone Sprayer", "district": "Kurunegala", "rate": 12000, "status": "booked tomorrow"},
    {"id": 3, "name": "Water Pump Kit", "district": "Matale", "rate": 3200, "status": "available"},
]
