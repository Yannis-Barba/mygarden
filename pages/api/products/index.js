import base from "../../../middlewares/common";
import Product from "../../../models/product";

async function handlePostProduct(req, res) {
  if (req.body) {
    const newProduct = await Product.createProduct(req.body);
    res.status(201).send(newProduct);
  }
}

async function handleGetProducts(req, res) {
  const products = await Product.getProducts();
  res.status(200).send(products);
}

async function handlePutProduct(req, res) {
  if (req.body.id) {
    const updatedProduct = await Product.updateOneProduct(req.body);
    res.status(200).send(updatedProduct);
  }
}

async function handleDeleteProduct(req, res) {
  console.log("delete back");
  if (req.query.id) {
    const deletedProduct = await Product.deleteOneProduct(req.query.id);
    res.status(204).send(deletedProduct);
  }
}

export default base()
  .post(handlePostProduct)
  .get(handleGetProducts)
  .put(handlePutProduct)
  .delete(handleDeleteProduct);
