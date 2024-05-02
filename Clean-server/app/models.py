from app import db1
from app import db2
from dataclasses import dataclass
import datetime

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy import String

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
    SP01D1010: bool
    SP01D1011: bool

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
    SP01D1010 = db1.Column(db1.Boolean())
    SP01D1011 = db1.Column(db1.Boolean())


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


@dataclass
class SP03_PropertyBuildings(db1.Model):
    __tablename__ = "SP03_PropertyBuildings"

    SP03_id: int
    SP03D1003: int
    SP03D1006: str
    SP03D1004: str
    SP03D1002: str
    SP03D1001: str
    SP03D1012: str
    SP03D1020: bool
    SP03D1007: str
    SP03D1008: str
    SP03D1010: bool

    SP03_id = db1.Column(db1.Integer(), primary_key=True)
    SP03D1003 = db1.Column(db1.Integer())
    SP03D1006 = db1.Column(db1.String())
    SP03D1004 = db1.Column(db1.String())
    SP03D1002 = db1.Column(db1.String())
    SP03D1001 = db1.Column(db1.String())
    SP03D1012 = db1.Column(db1.String())
    SP03D1020 = db1.Column(db1.Boolean())
    SP03D1007 = db1.Column(db1.String())
    SP03D1008 = db1.Column(db1.String())
    SP03D1010 = db1.Column(db1.Boolean())


@dataclass
class SP04_Rooms(db1.Model):
    __tablename__ = "SP04_Rooms"

    SP04_id: int
    SP04D1003: int
    SP04D1002: str
    SP04D1005: str
    SP04D1007: str
    SP04D1008: str
    SP04D1004: str
    SP04D1006: str
    SP04D1014: str
    SP04D1012: str
    SP04D1013: str
    SP04D1001: str
    SP04D1009: list
    SP04D1010: bool

    SP04_id = db1.Column(db1.Integer(), primary_key=True)
    SP04D1003 = db1.Column(db1.Integer())
    SP04D1002 = db1.Column(db1.String())
    SP04D1005 = db1.Column(db1.String())
    SP04D1007 = db1.Column(db1.String())
    SP04D1008 = db1.Column(db1.String())
    SP04D1004 = db1.Column(db1.String())
    SP04D1006 = db1.Column(db1.String())
    SP04D1014 = db1.Column(db1.String())
    SP04D1012 = db1.Column(db1.String())
    SP04D1013 = db1.Column(db1.String())
    SP04D1001 = db1.Column(db1.String())
    SP04D1009 = db1.Column(ARRAY(String))
    SP04D1010 = db1.Column(db1.Boolean())


@dataclass
class SP05_ServiceRooms(db1.Model):
    __tablename__ = "SP05_ServiceRooms"

    SP05_id: int
    SP05D1003: int
    SP05D1002: str
    SP05D1005: str
    SP05D1007: str
    SP05D1008: str
    SP05D1004: str
    SP05D1006: str
    SP05D1014: str
    SP05D1012: str
    SP05D1013: str
    SP05D1001: str
    SP05D1009: list
    SP05D1010: bool
    SP05D1011: str
    SP05D1015: str
    SP05D1020: bool
    SP05D1016: str

    SP05_id = db1.Column(db1.Integer(), primary_key=True)
    SP05D1003 = db1.Column(db1.Integer())
    SP05D1002 = db1.Column(db1.String())
    SP05D1005 = db1.Column(db1.String())
    SP05D1007 = db1.Column(db1.String())
    SP05D1008 = db1.Column(db1.String())
    SP05D1004 = db1.Column(db1.String())
    SP05D1006 = db1.Column(db1.String())
    SP05D1014 = db1.Column(db1.String())
    SP05D1012 = db1.Column(db1.String())
    SP05D1013 = db1.Column(db1.String())
    SP05D1001 = db1.Column(db1.String())
    SP05D1009 = db1.Column(ARRAY(String))
    SP05D1010 = db1.Column(db1.Boolean())
    SP05D1011 = db1.Column(db1.String())
    SP05D1015 = db1.Column(db1.String())
    SP05D1020 = db1.Column(db1.Boolean())
    SP05D1016 = db1.Column(db1.String())


@dataclass
class SPX_TaskList(db1.Model):
    __tablename__ = "SPX_TaskList"

    SPX_id: int
    SPXD1003: int
    SPXD1006: str
    SPXD1002: str
    # SPXD1005: str
    SPXD1012: str
    SPXD1013: str
    SPXD1014: str
    SPXD1016: str
    SPXD1017: str
    SPXD1018: str
    SPXD1001: str
    SPXD1015: str
    SPXD1010: bool
    SPXD1020: bool
    SPXD1019: str

    SPX_id = db1.Column(db1.Integer(), primary_key=True)
    SPXD1003 = db1.Column(db1.Integer())
    SPXD1006 = db1.Column(db1.String())
    SPXD1002 = db1.Column(db1.String())
    # SPXD1005 = db1.Column(db1.String())
    SPXD1012 = db1.Column(db1.String())
    SPXD1013 = db1.Column(db1.String())
    SPXD1014 = db1.Column(db1.String())
    SPXD1016 = db1.Column(db1.String())
    SPXD1017 = db1.Column(db1.String())
    SPXD1018 = db1.Column(db1.String())
    SPXD1001 = db1.Column(db1.String())
    SPXD1015 = db1.Column(db1.String())
    SPXD1010 = db1.Column(db1.Boolean())
    SPXD1020 = db1.Column(db1.Boolean())
    SPXD1019 = db1.Column(db1.String())
