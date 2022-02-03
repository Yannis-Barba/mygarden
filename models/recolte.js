const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("recoltes");
import dayjs from "dayjs";

function createRecolte(data) {
  return collection.insertOne({
    product: data.product,
    productId: data.productId,
    date: data.date,
    quantity: data.quantity,
    weight: data.weight,
  });
}

function getManyRecoltes(period) {
  return collection.find().toArray();
}

module.exports = {
  createRecolte,
  getManyRecoltes,
};
