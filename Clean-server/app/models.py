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
# class SP03_Services(Document):
#     Service = StringField()
#     Description = StringField()
#     Route = StringField()
#     meta = {"collection": "SP03_Services", "allow_inheritance": False}


class SP03_Services(DynamicDocument):
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


@dataclass
class SP01_Services(db1.Model):
    __tablename__ = "SP01_Services"

    SP01_id: int
    SP01D1004: str
    SP01D1005: str
    SP01D1006: str
    SP01D1001: str
    SP01D1007: str
    SP01D1008: str
    SP01D1002: str
    SP01D1009: str
    SP01D1003: int

    SP01_id = db1.Column(db1.Integer(), primary_key=True)
    SP01D1004 = db1.Column(db1.String())
    SP01D1005 = db1.Column(db1.String())
    SP01D1006 = db1.Column(db1.String())
    SP01D1001 = db1.Column(db1.String())
    SP01D1007 = db1.Column(db1.String())
    SP01D1008 = db1.Column(db1.String())
    SP01D1002 = db1.Column(db1.String())
    SP01D1009 = db1.Column(db1.String())
    SP01D1003 = db1.Column(db1.Integer())


@dataclass
class SP02_ServiceProperties(db1.Model):
    __tablename__ = "SP02_ServiceProperties"

    SP02_id: int
    SP02D1001: str
    SP02D1002: str
    SP02D1003: int
    SP02D1010: bool

    SP02_id = db1.Column(db1.Integer(), primary_key=True)
    SP02D1001 = db1.Column(db1.String())
    SP02D1002 = db1.Column(db1.String())
    SP02D1003 = db1.Column(db1.Integer())
    SP02D1010 = db1.Column(db1.Boolean())
