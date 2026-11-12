
from fastapi import FastAPI
from backend.app.auth import router as auth_router

app = FastAPI(
    title="LifeLedger API",
    description="Authentication and User Management",
    version="1.0.0"
)

# Connect authentication routes
app.include_router(auth_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to LifeLedger Authentication API"
    }
