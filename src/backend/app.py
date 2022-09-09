#!/usr/bin/env python3

from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin

import argparse
import json
import os

import pymongo
from pymongo import MongoClient


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

CONFIG = "mongodb+srv://{username}:{password}@{cluster_name}.ix0jn6h.mongodb.net/?retryWrites=true&w=majority"
db_name = None
collection_name = None


def __get_collection(db_name: str, collection_name: str):
    client = pymongo.MongoClient(CONFIG)

    db = client[db_name]
    collection = db[collection_name]

    return collection


@app.route("/")
def hello():
    return "Hello World. 9/07/22"


@app.route("/register", methods=["POST"])
def register():

    try:

        incoming_data = json.loads(request.get_data().decode("utf-8"))
        email = incoming_data["email"].strip()
        collection = __get_collection(db_name, collection_name)

        if collection.count_documents({"_id": email}) == 0:
            collection.insert_one({"_id": email})
            return json.dumps({"success": True, "info": "Thank you for registering."})

        else:
            return json.dumps({"success": False, "info": "Email already registered."})

    except:
        return json.dumps({"success": False, "info": "Could not save data."})


@app.route("/fetch", methods=["GET"])
def fetch():

    try:

        collection = __get_collection(db_name, collection_name)
        number_of_entries = collection.count_documents({})

        return json.dumps({"success": True, "info": number_of_entries})

    except:
        return json.dumps({"success": False})


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="MongoDB Atlas Parameters.")
    parser.add_argument("--username", type=str, help="Username.")
    parser.add_argument("--password", type=str, help="Password.")
    parser.add_argument("--cluster", type=str, help="Cluster Name.")
    parser.add_argument("--db", type=str, help="Database Name.")
    parser.add_argument("--collection", type=str, help="Collection Name.")
    parser.add_argument("--env", action="store_true", help="Set environment variables.")

    args = parser.parse_args()

    if args.env:
        CONFIG = CONFIG.format(
            username=args.username, password=args.password, cluster_name=args.cluster
        )

        db_name = args.db
        collection_name = args.collection

    else:

        config = json.loads(open("confiag.json").read())
        CONFIG = CONFIG.format(
            username=config["username"],
            password=config["password"],
            cluster_name=config["cluster_name"],
        )

        db_name = config["db_name"]
        collection_name = config["collection_name"]

    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 3456)))
