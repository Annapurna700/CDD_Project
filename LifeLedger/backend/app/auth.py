
from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from pymongo.errors import DuplicateKeyError

from backend.app.database import users_collection
from backend.app.security import (
    hash_password,
    verify_password,
    create_access_token,
    verify_access_token
)

router = APIRouter(prefix="/auth", tags=["Authentication"])

security = HTTPBearer()


# Registration model
from pydantic import BaseModel, EmailStr, Field
class RegisterRequest(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    email: EmailStr
    password: str = Field(min_length=8)

# Login model
class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# Unique email index
users_collection.create_index("email", unique=True)


# Registration API
@router.post("/register")
def register_user(user: RegisterRequest):

    email = str(user.email).lower().strip()

    existing_user = users_collection.find_one(
        {"email": email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    hashed_password = hash_password(user.password)

    new_user = {
        "name": user.name,
        "email": email,
        "password": hashed_password
    }

    try:
        users_collection.insert_one(new_user)
    except DuplicateKeyError:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    return {"message": "User registered successfully"}


# Login API
@router.post("/login")
def login_user(user: LoginRequest):

    email = str(user.email).lower().strip()

    existing_user = users_collection.find_one(
        {"email": email}
    )

    if not existing_user or not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        {"sub": email}
    )

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer"
    }


# Get current authenticated user
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):

    token = credentials.credentials

    payload = verify_access_token(token)

    if not payload or not payload.get("sub"):
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"}
        )

    user = users_collection.find_one(
        {"email": payload["sub"]}
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    return user


# Protected profile API
@router.get("/me")
def get_my_profile(
    current_user: dict = Depends(get_current_user)
):

    return {
        "name": current_user["name"],
        "email": current_user["email"]
    }
