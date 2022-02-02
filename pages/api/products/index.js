import base from "../../../middlewares/common";
import Product from "../../../models/product";

async function handlePostProduct(req, res) {
  if (req.body) {
    const newProduct = await Product.createProduct(req.body);
    res.status(201).send(newProduct);
  }
}

export default base().post(handlePostProduct);
