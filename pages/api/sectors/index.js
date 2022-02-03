import base from "../../../middlewares/common";
import Sector from "../../../models/sector";

async function handlePostSector(req, res) {
  if (req.body) {
    const newSector = await Sector.createSector(req.body);
    res.status(201).send(newSector);
  }
}

async function handleGetSectors(req, res) {
  if (req.query.id) {
    const sector = await Sector.getOneSector(req.query.id);
    res.status(200).send(sector);
  } else {
    const allSectors = await Sector.getAllSectors();
    res.status(200).send(allSectors);
  }
}

export default base().post(handlePostSector).get(handleGetSectors);
