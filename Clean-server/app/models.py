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


# POSTGRES
@dataclass
class SP02_Services(db1.Model):
    __tablename__ = "SP02_Services"

    SP02_id: int
    Space: str
    SpaceType: str
    Category: str

    SP02_id = db1.Column(db1.Integer(), primary_key=True)
    Space = db1.Column(db1.String())
    SpaceType = db1.Column(db1.String())
    Category = db1.Column(db1.String())
