import base from "../../../middlewares/common";
import Recolte from "../../../models/recolte";

async function handlePostRecolte(req, res) {
  if (req.body) {
    const newRecolte = await Recolte.createRecolte(req.body);
    res.status(201).send(newRecolte);
  }
}

export default base().post(handlePostRecolte);
