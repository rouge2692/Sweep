from flask import Flask, request, jsonify, render_template
import json
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from flask_mongoengine import MongoEngine
import pandas as pd

app = Flask(__name__)
app.config.from_object("config")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db2 = SQLAlchemy(app)
db1 = MongoEngine(app)


@app.route("/getServices", methods=["GET"])
def readServices():
    serviceSession = models.SP02_Services
    query = db1.session.query(serviceSession)
    records = query.all()

    print(records)

    return jsonify(records)


from app import models
