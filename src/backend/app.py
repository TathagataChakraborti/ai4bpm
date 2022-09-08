#!/usr/bin/env python3

from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin

import json
import os


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/")
def hello():
    return "Hello World. 9/07/22"


@app.route("/register", methods=["POST"])
def register():

    try:

        incoming_data = json.loads(request.get_data().decode("utf-8"))
        print(incoming_data)
        ### SAVE DATA ###

        if False:
            return json.dumps({"success": True, "info": "Thank you for registering."})

        else:
            return json.dumps({"success": False, "info": "Email already registered."})

    except:
        return json.dumps({"success": False, "info": "Could not save data."})


@app.route("/fetch", methods=["GET"])
def fetch():

    try:

        ### FETCH DATA ###
        number_of_entries = 666

        return json.dumps({"success": True, "info": number_of_entries})

    except:
        return json.dumps({"success": False})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 3456)))
