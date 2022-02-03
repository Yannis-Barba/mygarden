const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("sectors");

function createSector(data) {
  return collection.insertOne({
    name: data.name,
    description: data.description,
  });
}

function getAllSectors() {
  return collection.find().toArray();
}

function getOneSector(id) {
  return collection.findOne({ _id: ObjectId(id) });
}

module.exports = {
  createSector,
  getAllSectors,
  getOneSector,
};
