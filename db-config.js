const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DATABASE_URL);
client.connect();

const database = client.db("mygarden");

module.exports = database;
