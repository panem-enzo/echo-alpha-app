from fastapi import APIRouter
from app.auth import router as auth_router
from app.database import supabase
from app.models import RobotLog

router = APIRouter()
router.include_router(auth_router, prefix="/auth")

@router.post("/robot/data")
def receive_robot_data(log: RobotLog):
    response = supabase.table("robot_logs").insert(log.dict()).execute()
    return {"message": "Data stored", "data": response["data"]}