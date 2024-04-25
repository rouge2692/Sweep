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


# mongo
@app.route("/getServices", methods=["GET"])
def readServices():
    serviceSession = list(models.SP03_Services.objects)

    print(serviceSession)

    return jsonify(serviceSession)


# post
@app.route("/getRooms", methods=["GET"])
def readRooms():
    roomSession = models.SP02_Rooms
    query = db1.session.query(roomSession)
    records = query.all()

    print(records)

    return jsonify(records)


@app.route("/getSP01Services", methods=["GET"])
def readSP01Services():
    serviceSession = models.SP01_Services
    query = db1.session.query(serviceSession)
    records = query.all()

    recDf = pd.DataFrame(records).sort_values(by=["SP01D1003"])
    recDict = recDf.to_dict("records")

    print("Service Page")
    print(recDict)

    return jsonify(recDict)


@app.route("/getSP02ServicesProps", methods=["GET"])
def readSP02SerProps():
    serPropSession = models.SP02_ServiceProperties
    query = db1.session.query(serPropSession)
    records = query.all()

    print(records)

    return records


@app.route("/getSP04Rooms/<string:SP04D1008>", methods=["GET"])
def readSP04Rooms(SP04D1008):
    roomSession = models.SP04_Rooms
    query = db1.session.query(roomSession)
    records = query.all()

    recDf = pd.DataFrame(records)
    propBuildDf = recDf[(recDf["SP04D1008"] == SP04D1008)]
    propBuildDict = propBuildDf.to_dict("records")

    print("Rooms Page")
    print(propBuildDict)

    return jsonify(propBuildDict)


@app.route("/handleJobCreation/<string:jobHash>", methods=["GET", "POST"])
def handleJobCreation(jobHash):
    stagedJobSession = models.ST01_HandleJobCreation.objects(ST01D1002=jobHash)
    stagedJob = stagedJobSession.first()

    if request.method == "POST":
        if not stagedJob:
            data = request.json

            hashSet = (
                "J9z0HZf5azJT4d1s29dc5s3J0TYf2z7bx28g3Z1d01vkur7jzJ4Erv61Y7Y5QSO2w6e6W"
            )
            recId = "".join(random.sample(hashSet, 10))

            new_record = models.ST01_HandleJobCreation(**data)
            new_record.ST01D1002 = recId
            new_record.save()

            coll = models.ST01_HandleJobCreation.objects

            updatedRec = coll(ST01D1002=recId)
            updatedRec = updatedRec.first()

            return jsonify({"response": updatedRec.ST01D1002})
        else:
            data = request.json
            stagedJob.delete()
            new_record = models.ST01_HandleJobCreation(**data)
            new_record.save()

            coll = models.ST01_HandleJobCreation.objects

            updatedRec = coll(ST01D1002=jobHash)
            updatedRec = updatedRec.first()

            return jsonify({"response": updatedRec.ST01D1002})

    else:
        stagedJobSession = models.ST01_HandleJobCreation.objects(ST01D1002=jobHash)
        stagedJob = stagedJobSession.first()
        print(stagedJob)
        return jsonify(stagedJob)


@app.route("/refreshST01", methods=["POST"])
def findCustomer():
    customerID = request.json
    customerJobs = models.ST01_HandleJobCreation.objects(ST01D1003=customerID)

    if not customerJobs:
        return jsonify({"error": "no data"})
    else:
        customerJobs.delete()
        return jsonify({"success": f"deleted {customerID} jobs"})


@app.route("/getDataTemp/<string:collection>", methods=["GET"])
def readDataTemp(collection):
    dataTempSession = models.SP98_DataTemps.objects(COLL=collection)

    ST01coll = dataTempSession.first()
    ST01Data = ST01coll.DATA

    print(ST01Data)

    return jsonify(ST01Data)


from app import models
