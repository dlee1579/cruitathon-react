from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pandas as pd
import json

app = Flask("__main__")
CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

uri_db = "postgres+psycopg2://vjlpuguktrkyxc:75f49540a175bf9ffc0b5c6172cd3303d035f5c93c92e7256c9201ce4cf9a303@ec2-34-235-108-68.compute-1.amazonaws.com:5432/dd3fi28k9rhe31"
app.config['SQLALCHEMY_DATABASE_URI'] = uri_db

db = SQLAlchemy(app)

class Teams(db.Model):
    def __init__(cls, classname, bases, dict_):
        super().__init__(classname, bases, dict_)
        pass
    
    __tablename__ = "Teams"
    team_id = db.Column(db.Integer, primary_key=True)
    team = db.Column(db.String)
    conference = db.Column(db.String)
    mascot = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)

class Recruits(db.Model):
    __tablename__ = "Recruits"
    player_id = db.Column(db.Integer, primary_key =  True)
    name = db.Column(db.String)
    team = db.Column(db.String)
    position = db.Column(db.String)
    score = db.Column(db.Numeric)
    hometown = db.Column(db.String)
    state = db.Column(db.String)

class Offers(db.Model):
    __tablename__ = "Offers"
    offer_id = db.Column(db.Integer, primary_key=True)
    player_id = db.Column(db.Integer)
    offer = db.Column(db.String)

with open("Colors.json") as json_file:
    colors = json.load(json_file)

@app.route('/')
def home():
    teams = db.session.query(Teams.team, Teams.conference).all()
    print('called from React')
    return jsonify([{"team": r[0], "conference": r[1]} for r in teams])

@app.route("/team/<team_selected>", methods=["GET"])
def team(team_selected):
    recruits = db.session.query(Recruits.name, Recruits.state, Recruits.position, Recruits.score).filter(Recruits.team == team_selected)

    recruits_df = pd.read_sql(recruits.statement, db.engine)
    print(recruits_df)
    commit_count = int(recruits_df.name.count())
    avg_score = round(recruits_df.score.mean(), 5)
    
    print(colors[team_selected]["colors"][0])

    return {"team" : team_selected,
    "commit_count": commit_count,
    "avg_score": avg_score,
    "color_primary": colors[team_selected]["colors"][0],
    "color_secondary": colors[team_selected]["colors"][1]}

if __name__ == "__main__":
    # print([r[0] for r in db.session.query(Teams.team).all()])
    app.run(debug=True)