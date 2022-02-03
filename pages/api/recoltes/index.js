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

async function handlePutRecolte(req, res) {
  if (req.body.id) {
    const updatedRecolte = await Recolte.updateOneRecolte(req.body);
    res.status(200).send(updatedRecolte);
  }
}

async function handleDeleteRecolte(req, res) {
  if (req.query.id) {
    const deletedRecolte = await Recolte.deleteOneRecolte(req.query.id);
    res.status(204).send(deletedRecolte);
  }
}

export default base()
  .post(handlePostRecolte)
  .get(handleGetRecoltes)
  .put(handlePutRecolte)
  .delete(handleDeleteRecolte);
