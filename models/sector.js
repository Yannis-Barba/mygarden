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

function updateSector(data) {
  return collection.updateOne(
    { _id: ObjectId(data.id) },
    { $set: { name: data.name, description: data.description } }
  );
}

function deleteOneSector(id) {
  console.log("here again");
  return collection.deleteOne({ _id: ObjectId(id) });
}

module.exports = {
  createSector,
  getAllSectors,
  getOneSector,
  updateSector,
  deleteOneSector,
};
