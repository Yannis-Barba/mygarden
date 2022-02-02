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

export default base().post(handlePostProduct).get(handleGetProducts);
