from pydantic import BaseModel

class RobotLog(BaseModel):
    timestamp: str
    data: dict