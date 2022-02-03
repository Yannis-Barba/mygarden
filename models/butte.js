const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("buttes");

function createButte(data) {
  return collection.insertOne({
    name: data.name,
    description: data.description,
    sector: data.sector,
  });
}

function getOneButte(id) {
  return collection.findOne({ _id: ObjectId(id) });
}

function getAllButtes() {
  return collection.find().toArray();
}

module.exports = {
  createButte,
  getOneButte,
  getAllButtes,
};
