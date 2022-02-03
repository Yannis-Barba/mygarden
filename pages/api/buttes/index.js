import base from "../../../middlewares/common";
import Butte from "../../../models/butte";

async function handlePostButte(req, res) {
  if (req.body) {
    const newButte = await Butte.createButte(req.body);
    res.status(201).send(newButte);
  }
}

async function handleGetButtes(req, res) {
  if (req.query.id) {
    const butte = await Butte.getOneButte(req.query.id);
    res.status(200).send(butte);
  } else {
    const buttes = await Butte.getAllButtes();
    res.status(200).send(buttes);
  }
}

async function handlePutButte(req, res) {
  if (req.body) {
    const updatedButte = await Butte.updateButte(req.body);
    res.status(200).send(updatedButte);
  }
}

async function handleDeleteButte(req, res) {
  if (req.query.id) {
    const deletedButte = await Butte.deleteOneButte(req.query.id);
    res.status(204).send(deletedButte);
  }
}

export default base()
  .post(handlePostButte)
  .get(handleGetButtes)
  .put(handlePutButte)
  .delete(handleDeleteButte);
