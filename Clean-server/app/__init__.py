from flask import Flask, request, jsonify, render_template
import json
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from flask_mongoengine import MongoEngine
import pandas as pd

app = Flask(__name__)
app.config.from_object("config")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db1 = SQLAlchemy(app)
db2 = MongoEngine(app)


@app.route("/getRooms", methods=["GET"])
def readRooms():
    roomSession = models.SP02_Rooms
    query = db1.session.query(roomSession)
    records = query.all()

    print(records)

    return jsonify(records)


@app.route("/getServices", methods=["GET"])
def readServices():
    serviceSession = list(models.SP03_Services.objects)

    print(serviceSession)

    return jsonify(serviceSession)


from app import models
