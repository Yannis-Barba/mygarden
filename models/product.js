const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("products");

function createProduct(data) {
  return collection.insertOne({
    name: data.name,
    genre: data.genre,
    semisStart: data.semisStart,
    semisEnd: data.semisEnd,
    plantationStart: data.plantationStart,
    plantationEnd: data.plantationEnd,
    recolteStart: data.recolteStart,
    recolteEnd: data.recolteEnd,
    imgUrl: data.imgUrl,
    goodAssociation: data.goodAssociation,
    badAssociation: data.badAssociation,
  });
}

function getProducts() {
  return collection.find().toArray();
}

function getOneProduct(id) {
  return collection.findOne({ _id: ObjectId(id) });
}

module.exports = {
  createProduct,
  getProducts,
  getOneProduct,
};
