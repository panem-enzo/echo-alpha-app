from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.database import supabase

router = APIRouter()

class AuthRequest(BaseModel):
    email: str
    password: str

@router.post("/signup")
def signup(auth_data: AuthRequest):
    response = supabase.auth.sign_up(auth_data.email, auth_data.password)
    if "error" in response:
        raise HTTPException(status_code=400, detail=response["error"]["message"])
    return {"message": "User created", "user": response["user"]}

@router.post("/login")
def login(auth_data: AuthRequest):
    response = supabase.auth.sign_in_with_password({"email": auth_data.email, "password": auth_data.password})
    if "error" in response:
        raise HTTPException(status_code=400, detail=response["error"]["message"])
    return {"access_token": response["session"]["access_token"]}