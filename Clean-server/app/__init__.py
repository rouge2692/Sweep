from flask import Flask, request, jsonify, render_template, redirect, url_for
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from flask_cors import CORS
import json
import pandas as pd
import random
from geopy.geocoders import GeoNames

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

# from flask_mongoengine import MongoEngine
from pymongo import MongoClient

app = Flask(__name__)
# required authentication
app.secret_key = "super secret string"
# loads config.py to app.config dictionary
app.config.from_object("config")

# SQLAlchemy requires app object, automatically searches config object for URI string
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db1 = SQLAlchemy(app)
# mongoclient requires connection string
db2 = MongoClient(app.config["MONGODB_SETTINGS"]).get_database("SweepNoDB")

login_manager = LoginManager()
login_manager.init_app(app)

CORS(app)


#######################################################
####### MONGO
#######################################################
@app.route("/handleJobCreation/<string:jobHash>", methods=["GET", "POST"])
def handleJobCreation(jobHash):

    # MONGOCLIENT
    stagedJobCollection = db2["ST01_HandleJobCreation"]
    stagedJob = stagedJobCollection.find_one({"ST01D1002": jobHash})

    if request.method == "POST":
        if not stagedJob:
            data = request.json

            hashSet = (
                "J9z0HZf5azJT4d1s29dc5s3J0TYf2z7bx28g3Z1d01vkur7jzJ4Erv61Y7Y5QSO2w6e6W"
            )
            recId = "".join(random.sample(hashSet, 10))

            # MONGOCLIENT
            data["ST01D1002"] = recId
            stagedJobCollection.insert_one(data)

            updatedRec = stagedJobCollection.find_one({"ST01D1002": recId})["ST01D1002"]

            return jsonify({"response": updatedRec})
        else:
            data = request.json
            # MONGOCLIENT
            stagedJobCollection.delete_one({"ST01D1002": jobHash})
            stagedJobCollection.insert_one(data)

            # MONGOCLIENT
            updatedRec = stagedJobCollection.find_one({"ST01D1002": jobHash})[
                "ST01D1002"
            ]

            return jsonify({"response": updatedRec})

    else:
        # MONGOCLIENT
        stagedJobCollection = db2["ST01_HandleJobCreation"]
        stagedJob = stagedJobCollection.find_one({"ST01D1002": jobHash})

        del stagedJob["_id"]

        print(stagedJob)
        return jsonify(stagedJob)


@app.route("/refreshST01", methods=["POST"])
def findCustomer():
    customerID = request.json

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

    # MONGOCLIENT
    dataTempCollection = db2["SP98_DataTemps"]
    ST01coll = dataTempCollection.find_one({"COLL": collection})
    # ST01Data = ST01coll.DATA
    ST01Data = ST01coll["DATA"]

    return jsonify(ST01Data)


@app.route("/getprofcuenta/<string:ST02D1002>", methods=["GET"])
def getprofcuenta(ST02D1002):
    profcuentaDB = db2["ST02_HandleServiceProfileRegistration"]
    profcuenta = profcuentaDB.find_one({"ST02D1002": ST02D1002}, {"_id": 0})

    return jsonify(profcuenta)


@app.route("/handleNewCuenta", methods=["POST"])
def handleNewCuenta():
    data = request.json

    dataTemp = db2["SP98_DataTemps"]
    st02DataTemp = dataTemp.find_one({"COLL": "ST02"})["DATA"]

    st02DataTemp["ST02D1002"] = data["SP00D1006"]
    st02DataTemp["ST02D1001"] = data["SP00D1001"]
    st02DataTemp["ST02D1003"] = data["SP00D1001"]
    st02DataTemp["ST02D1004"] = data["SP00D1002"]
    st02DataTemp["ST02D1005"] = data["SP00D1004"]

    ST02 = db2["ST02_HandleServiceProfileRegistration"]
    ST02.insert_one(st02DataTemp)

    profcuentaDB = db2["ST02_HandleServiceProfileRegistration"]
    profcuenta = profcuentaDB.find_one({"ST02D1002": data["SP00D1006"]}, {"_id": 0})

    return jsonify(profcuenta)


@app.route("/CitiesSPXST02/<string:ST02D1002>", methods=["POST"])
def readCitiesSPXpostST02(ST02D1002):
    profcuentaDB = db2["ST02_HandleServiceProfileRegistration"]

    profcuentaFilter = profcuentaDB.find_one({"ST02D1002": ST02D1002})["_id"]

    selCities = request.json
    selCitiesArray = [x["value"] for x in selCities]
    profcuentaDB.update_one(
        {"_id": profcuentaFilter}, {"$set": {"ST02D1006": selCitiesArray}}
    )

    profcuenta = profcuentaDB.find_one({"ST02D1002": ST02D1002}, {"_id": 0})

    return jsonify(profcuenta)


@app.route("/profCuentaProperties/<string:ST02D1002>", methods=["POST"])
def postProperties(ST02D1002):
    taskSession = models.SPX_TaskList
    profcuentaDB = db2["ST02_HandleServiceProfileRegistration"]
    profcuentaFilter = profcuentaDB.find_one({"ST02D1002": ST02D1002})["_id"]

    taskquery = db1.session.query(taskSession)
    spx = taskquery.all()

    spxDF = pd.DataFrame(spx)
    spxDF["SPXD1004"] = 0  # Rate

    selPropers = request.json

    for selProperty in selPropers["data"]:
        if selProperty["Active"] == True:
            propertyTaskDF = spxDF[
                (spxDF["SPXD1014"] == selProperty["Property"])
                & (spxDF["SPXD1016"] == selProperty["Building"])
            ]
            propertyTaskDict = propertyTaskDF.to_dict("records")

            selProperty["Tasks"] = propertyTaskDict

        else:
            pass

    profcuentaDB.update_one(
        {"_id": profcuentaFilter}, {"$set": {"ST02D1007": selPropers["data"]}}
    )

    return jsonify(profcuentaDB.find_one({"ST02D1002": ST02D1002}, {"_id": 0}))


#######################################################
####### POSTGRES
#######################################################
@app.route("/getRooms", methods=["GET"])
def readRooms():
    roomSession = models.SP04_Rooms
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
def readSP05Rooms(SP05D1016):
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


@app.route("/getCities", methods=["GET"])
def get_cities():
    regionSession = models.SP06_Regions
    query = db1.session.query(regionSession)
    records = query.all()

    return jsonify(records)


@app.route("/postSP00Profcuenta", methods=["POST"])
def postProfcuenta():
    data = request.json
    profcuentaSession = models.SP00_Profcuenta

    hashSet = "Jx27Y5QSO2w8g3duc5s3J0Z1d01vk9z0T4d1s29TYf2z7br7jzJ4ErHZf5azJv61Y6e6W"
    sp00D1006 = "".join(random.sample(hashSet, 10))

    currPC = profcuentaSession(
        SP00D1001=data["SP00D1001"].upper(),
        SP00D1002=data["SP00D1002"].upper(),
        SP00D1004=data["SP00D1004"],
        SP00D1005=data["SP00D1005"],
        SP00D1006=f"{data['SP00D1001'][:3].upper()}{data['SP00D1004'][-4:]}-{sp00D1006}",
    )

    db1.session.add(currPC)

    db1.session.flush()
    db1.session.commit()

    query = db1.session.query(profcuentaSession)
    new = query.filter(
        profcuentaSession.SP00D1006
        == f"{data['SP00D1001'][:3].upper()}{data['SP00D1004'][-4:]}-{sp00D1006}"
    ).first()

    return jsonify(new)


@app.route("/getSP00Profcuenta/<string:correNomb>", methods=["GET"])
def readProfcuenta(correNomb):
    profcuentaSession = models.SP00_Profcuenta
    query = db1.session.query(profcuentaSession)
    records = query.filter(profcuentaSession.SP00D1002 == correNomb)

    return None


from app import models
