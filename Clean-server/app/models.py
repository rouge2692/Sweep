from app import db1
from app import db2
from dataclasses import dataclass
import datetime

from flask_sqlalchemy import SQLAlchemy

from mongoengine import (
    Document,
    DateTimeField,
    StringField,
    ReferenceField,
    ListField,
    IntField,
    DictField,
    DynamicDocument,
)
from flask_mongoengine import MongoEngine


# MONGO
class SP03_Services(Document):
    Service = StringField()
    Description = StringField()
    Route = StringField()
    meta = {"collection": "SP03_Services", "allow_inheritance": False}


class ST01_HandleJobCreation(DynamicDocument):
    meta = {"collection": "ST01_HandleJobCreation", "allow_inheritance": False}


class SP98_DataTemps(DynamicDocument):
    meta = {"collection": "SP98_DataTemps", "allow_inheritance": False}


# POSTGRES
@dataclass
class SP02_Rooms(db1.Model):
    __tablename__ = "SP02_Rooms"

    SP02_id: int
    Space: str
    SpaceType: str
    Category: str

    SP02_id = db1.Column(db1.Integer(), primary_key=True)
    Space = db1.Column(db1.String())
    SpaceType = db1.Column(db1.String())
    Category = db1.Column(db1.String())
