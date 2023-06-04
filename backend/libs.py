from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo.mongo_client import MongoClient
from pydantic import BaseModel
import pprint
app = FastAPI()
class Post(BaseModel):
  title: str
  date: str
  text: str 
admin_login = 'admin'
admin_password = 'pass123'
origins = ["*"]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

