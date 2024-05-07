from flask import Flask, request, jsonify, render_template
import json
import pandas as pd
import random

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

from flask_mongoengine import MongoEngine
from pymongo import MongoClient

# import firebase_admin
# from firebase_admin import firestore
# from firebase_admin import credentials

app = Flask(__name__)
app.config.from_object("config")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db1 = SQLAlchemy(app)
db2 = MongoClient(app.config['MONGODB_SETTINGS']).get_database("SweepNoDB")
# db2 = MongoEngine(app)

# FIREBASE
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


# MONGO
@app.route("/getServices", methods=["GET"])
def readServices():
    serviceSession = list(models.SP03_Services.objects)

    print(serviceSession)

    return jsonify(serviceSession)

@app.route("/handleJobCreation/<string:jobHash>", methods=["GET", "POST"])
def handleJobCreation(jobHash):
    # MONGOENGINE
    # stagedJobSession = models.ST01_HandleJobCreation.objects(ST01D1002=jobHash)
    # stagedJob = stagedJobSession.first()

    # MONGOCLIENT
    stagedJobCollection = db2["ST01_HandleJobCreation"]
    stagedJob = stagedJobCollection.find_one({"ST01D1002":jobHash})

    if request.method == "POST":
        if not stagedJob:
            data = request.json

            hashSet = (
                "J9z0HZf5azJT4d1s29dc5s3J0TYf2z7bx28g3Z1d01vkur7jzJ4Erv61Y7Y5QSO2w6e6W"
            )
            recId = "".join(random.sample(hashSet, 10))
            
            # MONGOENGINE
            # new_record = models.ST01_HandleJobCreation(**data)
            # new_record.ST01D1002 = recId
            # new_record.save()

            # coll = models.ST01_HandleJobCreation.objects

            # updatedRec = coll(ST01D1002=recId)
            # updatedRec = updatedRec.first()

            # MONGOCLIENT
            data['ST01D1002'] = recId
            stagedJobCollection.insert_one(data)

            updatedRec = stagedJobCollection.find_one({"ST01D1002":recId})['ST01D1002']

            return jsonify({"response": updatedRec})
        else:
            data = request.json

            # MONGOENG
            # stagedJob.delete()
            # new_record = models.ST01_HandleJobCreation(**data)
            # new_record.save()

            # MONGOCLIENT
            stagedJobCollection.delete_one({"ST01D1002":jobHash})
            stagedJobCollection.insert_one(data)
            
            # MONGOENG
            # coll = models.ST01_HandleJobCreation.objects

            # updatedRec = coll(ST01D1002=jobHash)
            # updatedRec = updatedRec.first()

            # MONGOCLIENT
            updatedRec = stagedJobCollection.find_one({"ST01D1002":recId})['ST01D1002']

            return jsonify({"response": updatedRec})

    else:
        #  MONGOENGINE
        # stagedJobSession = models.ST01_HandleJobCreation.objects(ST01D1002=jobHash)
        # stagedJob = stagedJobSession.first()

        # MONGOCLIENT
        stagedJobCollection = db2["ST01_HandleJobCreation"]
        stagedJob = stagedJobCollection.find_one({"ST01D1002":jobHash})

        print(stagedJob)
        return jsonify(stagedJob)


@app.route("/refreshST01", methods=["POST"])
def findCustomer():
    customerID = request.json
    # MONGOENGINE
    # customerJobs = models.ST01_HandleJobCreation.objects(ST01D1003=customerID)

    # MONGOCLIENT
    customerJobs = db2["ST01_HandleJobCreation"]

    # if not customerJobs:
    if customerJobs.count_documents({"ST01D1003": customerID}) == 0:
        return jsonify({"error": "no data"})
    else:
        customerJobs.delete_many({"ST01D1003": customerID})
        return jsonify({"success": f"deleted {customerID} jobs"})


@app.route("/getDataTemp/<string:collection>", methods=["GET"])
def readDataTemp(collection):
    # MONGOENGINE
    # dataTempSession = models.SP98_DataTemps.objects(COLL=collection)

    # MONGOCLIENT
    dataTempCollection = db2["SP98_DataTemps"]
    ST01coll = dataTempCollection.find_one({"COLL" : collection})
    # ST01Data = ST01coll.DATA
    ST01Data = ST01coll['DATA']
    
    print("ST01HEREHEHERHERHERE")
    print(ST01Data)

    return jsonify(ST01Data)

#########################################
####### POSTGRES
#########################################
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

    # print("Service Page")
    # print(recDict)

    return jsonify(recDict)


@app.route("/getSP02ServicesProps/<string:SP02D1002>", methods=["GET"])
def readSP02SerProps(SP02D1002):
    serPropSession = models.SP02_ServiceProperties
    query = db1.session.query(serPropSession)
    records = query.all()

    recDf = pd.DataFrame(records)
    propDf = recDf[(recDf["SP02D1002"] == SP02D1002)]
    propDict = propDf.to_dict("records")

    print("Property Page")
    print(propDict)

    return jsonify(propDict)


@app.route("/getSP03PropBuilds/<string:SP03D1007>", methods=["GET"])
def readSP03SerPropBuilds(SP03D1007):
    propBuildSession = models.SP03_PropertyBuildings
    query = db1.session.query(propBuildSession)
    records = query.all()

    recDf = pd.DataFrame(records)
    propBuildDf = recDf[(recDf["SP03D1007"] == SP03D1007)]
    propBuildDict = propBuildDf.to_dict("records")

    print("Property Page")
    print(propBuildDict)

    return jsonify(propBuildDict)


@app.route("/getSP05SerRooms/<string:SP05D1016>", methods=["GET"])
def readSP04Rooms(SP05D1016):
    serRoomsSession = models.SP05_ServiceRooms
    query = db1.session.query(serRoomsSession)
    records = query.all()

    recDf = pd.DataFrame(records)
    serRoomsDf = recDf[(recDf["SP05D1016"] == SP05D1016)]
    serRoomsDict = serRoomsDf.to_dict("records")

    print("Rooms Page")
    print(SP05D1016)
    print(serRoomsDict)

    return jsonify(serRoomsDict)


@app.route("/getSPXTaskList", methods=["GET"])
def readSPXTasks():
    taskSession = models.SPX_TaskList
    query = db1.session.query(taskSession)
    records = query.all()

    return jsonify(records)


from app import models
