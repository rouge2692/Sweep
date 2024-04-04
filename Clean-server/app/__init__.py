from flask import Flask, request, jsonify, render_template
import json
import pandas as pd
import random

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

from flask_mongoengine import MongoEngine

# import firebase_admin
# from firebase_admin import firestore
# from firebase_admin import credentials

app = Flask(__name__)
app.config.from_object("config")

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db1 = SQLAlchemy(app)

db2 = MongoEngine(app)

# cred = credentials.ApplicationDefault()
# app2 = firebase_admin.initialize_app(cred)
# db3 = firestore.client()


# @app.route("/getFireServices", methods=["GET"])
# def fireReadServices():
#     fireServices = db3.collection("SP03_Services")
#     docs = fireServices.stream()

#     for doc in docs:
#         print(f"{doc.id} => {doc.to_dict()}")
#     return jsonify(docs)


@app.route("/getServices", methods=["GET"])
def readServices():
    serviceSession = list(models.SP03_Services.objects)

    print(serviceSession)

    return jsonify(serviceSession)


@app.route("/getRooms", methods=["GET"])
def readRooms():
    roomSession = models.SP02_Rooms
    query = db1.session.query(roomSession)
    records = query.all()

    print(records)

    return jsonify(records)


@app.route("/handleJobCreation/<string:jobHash>", methods=["GET", "POST"])
def handleJobCreation(jobHash):

    if request.method == "POST":
        data = request.json

        hashSet = "J9z0#HZf5a&z$J@T4d1s29dc5s3J$0TYf@2z&*7bx28g3Z1d!#01vkur7jz^J4Erv61Y7$Y5Q!SO2w6e6W"
        recId = "".join(random.sample(hashSet, 10))

        new_record = models.ST01_HandleJobCreation(**data)
        new_record.D1002 = recId

        new_record.save()

        coll = models.ST01_HandleJobCreation.objects

        updatedRec = coll(D1002=recId)
        updatedRec = updatedRec.first()

        return jsonify({"response": updatedRec.D1002})

    else:
        stagedJobSession = models.ST01_HandleJobCreation.objects(D1002=jobHash)

        stagedJob = stagedJobSession.first()
        stagedJob.delete()

        print(stagedJob)

        return jsonify(stagedJob)


@app.route("/getST01Temp/<string:jobHash>", methods=["GET"])
def readSTJobCreationTemp(jobHash):
    stagingJobCreationSession = models.ST01_HandleJobCreation.objects(D1002=jobHash)

    tempStagingJobCreation = stagingJobCreationSession.first()
    tempStagingJobCreation.delete()

    print(tempStagingJobCreation)

    return jsonify(tempStagingJobCreation)


@app.route("/getDataTemp/<string:collection>", methods=["GET"])
def readDataTemp(collection):
    dataTempSession = models.SP98_DataTemps.objects(COLL=collection)

    ST01coll = dataTempSession.first()
    ST01Data = ST01coll.DATA

    print(ST01Data)

    return jsonify(ST01Data)


from app import models
