from datetime import datetime
from enum import Enum
from typing import Optional

from sqlalchemy import Boolean, DateTime, Enum as SqlEnum, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class UserRole(str, Enum):
    farmer = "farmer"
    buyer = "buyer"
    admin = "admin"


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    role: Mapped[UserRole] = mapped_column(SqlEnum(UserRole), default=UserRole.farmer)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Farmer(Base):
    __tablename__ = "farmers"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    district: Mapped[str] = mapped_column(String(80))
    rating: Mapped[float] = mapped_column(Float, default=4.7)
    farm_count: Mapped[int] = mapped_column(Integer, default=1)
    user: Mapped[User] = relationship()


class Buyer(Base):
    __tablename__ = "buyers"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    company_name: Mapped[Optional[str]] = mapped_column(String(140), nullable=True)
    preferred_crops: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    user: Mapped[User] = relationship()


class Farm(Base):
    __tablename__ = "farms"

    id: Mapped[int] = mapped_column(primary_key=True)
    farmer_id: Mapped[int] = mapped_column(ForeignKey("farmers.id"))
    name: Mapped[str] = mapped_column(String(120))
    district: Mapped[str] = mapped_column(String(80))
    soil_type: Mapped[str] = mapped_column(String(80))
    acreage: Mapped[float] = mapped_column(Float)


class SensorData(Base):
    __tablename__ = "sensor_data"

    id: Mapped[int] = mapped_column(primary_key=True)
    farm_id: Mapped[int] = mapped_column(ForeignKey("farms.id"))
    soil_moisture: Mapped[float] = mapped_column(Float)
    temperature: Mapped[float] = mapped_column(Float)
    humidity: Mapped[float] = mapped_column(Float)
    water_level: Mapped[float] = mapped_column(Float)
    sunlight: Mapped[float] = mapped_column(Float)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Crop(Base):
    __tablename__ = "crops"

    id: Mapped[int] = mapped_column(primary_key=True)
    farmer_id: Mapped[int] = mapped_column(ForeignKey("farmers.id"))
    name: Mapped[str] = mapped_column(String(120))
    variety: Mapped[str] = mapped_column(String(120))
    district: Mapped[str] = mapped_column(String(80))
    quantity_kg: Mapped[float] = mapped_column(Float)
    price_per_kg: Mapped[float] = mapped_column(Float)
    quality_score: Mapped[float] = mapped_column(Float, default=88)
    growth_stage: Mapped[str] = mapped_column(String(80), default="Harvest ready")


class Order(Base):
    __tablename__ = "orders"

    id: Mapped[int] = mapped_column(primary_key=True)
    buyer_id: Mapped[int] = mapped_column(ForeignKey("buyers.id"))
    crop_id: Mapped[int] = mapped_column(ForeignKey("crops.id"))
    quantity_kg: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(60), default="pending")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Rating(Base):
    __tablename__ = "ratings"

    id: Mapped[int] = mapped_column(primary_key=True)
    farmer_id: Mapped[int] = mapped_column(ForeignKey("farmers.id"))
    buyer_id: Mapped[int] = mapped_column(ForeignKey("buyers.id"))
    score: Mapped[float] = mapped_column(Float)
    comment: Mapped[Optional[str]] = mapped_column(Text, nullable=True)


class Delivery(Base):
    __tablename__ = "deliveries"

    id: Mapped[int] = mapped_column(primary_key=True)
    order_id: Mapped[int] = mapped_column(ForeignKey("orders.id"))
    status: Mapped[str] = mapped_column(String(80), default="scheduled")
    eta: Mapped[str] = mapped_column(String(80), default="48 hours")


class EquipmentRental(Base):
    __tablename__ = "equipment_rentals"

    id: Mapped[int] = mapped_column(primary_key=True)
    farmer_id: Mapped[int] = mapped_column(ForeignKey("farmers.id"))
    equipment_name: Mapped[str] = mapped_column(String(120))
    daily_rate_lkr: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(60), default="available")


class AIPrediction(Base):
    __tablename__ = "ai_predictions"

    id: Mapped[int] = mapped_column(primary_key=True)
    farm_id: Mapped[int] = mapped_column(ForeignKey("farms.id"))
    prediction_type: Mapped[str] = mapped_column(String(100))
    summary: Mapped[str] = mapped_column(Text)
    confidence: Mapped[float] = mapped_column(Float)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
