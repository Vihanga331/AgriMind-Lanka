from fastapi import APIRouter, HTTPException, status

from app.core.security import create_access_token
from app.schemas.auth import LoginRequest, RegisterRequest, TokenResponse

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=TokenResponse)
async def register(payload: RegisterRequest):
    token = create_access_token(payload.email, payload.role)
    return {
        "access_token": token,
        "user": {"name": payload.name, "email": payload.email, "role": payload.role},
    }


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    role = "buyer" if "buyer" in payload.email else "farmer"
    if not payload.password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = create_access_token(payload.email, role)
    return {
        "access_token": token,
        "user": {"name": "Demo Buyer" if role == "buyer" else "Demo Farmer", "email": payload.email, "role": role},
    }
