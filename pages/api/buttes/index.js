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

export default base().post(handlePostButte).get(handleGetButtes);
