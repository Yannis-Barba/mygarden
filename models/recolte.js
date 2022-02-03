const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("recoltes");

function createRecolte(data) {
  return collection.insertOne({
    product: data.product,
    date: data.date,
    quantity: data.quantity,
    weight: data.weight,
  });
}

module.exports = {
  createRecolte,
};
