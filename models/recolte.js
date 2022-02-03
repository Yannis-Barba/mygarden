const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("recoltes");

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

function getOneRecolte(id) {
  return collection.findOne({ _id: ObjectId(id) });
}

function updateOneRecolte(data) {
  return collection.updateOne(
    { _id: ObjectId(data.id) },
    {
      $set: {
        date: data.date,
        quantity: data.quantity,
        weight: data.weight,
      },
    }
  );
}

function deleteOneRecolte(id) {
  return collection.deleteOne({ _id: ObjectId(id) });
}

module.exports = {
  createRecolte,
  getManyRecoltes,
  getOneRecolte,
  updateOneRecolte,
  deleteOneRecolte,
};
