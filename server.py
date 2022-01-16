from flask import Flask, request
import json
from pathlib import Path

rezervari_filename = "data.txt"

myfile = Path(rezervari_filename)
myfile.touch(exist_ok=True)
f = open(myfile)

app = Flask(__name__)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

def save_subscription_info(info_json):
    info_toAdd = ""
    keys = list(info_json.keys())
    for key in keys:
        info_toAdd += info_json[key] + ","
    info_toAdd += "\n"
    with open(rezervari_filename, "a+") as f:
        f.write(info_toAdd)

def load_subscriptions():
    with open(rezervari_filename) as f:
        data = f.readlines()
    return data

@app.route("/save-subscription", methods=["POST"])
def save_subscription():
    info = request.json
    save_subscription_info(info)
    return "subscription added"

@app.route("/subscriptions", methods=["GET"])
def load_subscriptions_info():
    data = load_subscriptions()
    return json.dumps(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)