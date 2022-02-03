import base from "../../../middlewares/common";
import Recolte from "../../../models/recolte";

async function handlePostRecolte(req, res) {
  if (req.body) {
    const newRecolte = await Recolte.createRecolte(req.body);
    res.status(201).send(newRecolte);
  }
}

async function handleGetRecoltes(req, res) {
  const recoltes = await Recolte.getManyRecoltes();
  res.status(200).send(recoltes);
}

export default base().post(handlePostRecolte).get(handleGetRecoltes);
