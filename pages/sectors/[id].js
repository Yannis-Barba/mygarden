import { useState } from "react";
import Layout from "../../components/Layout";
import { getAllSectors, getOneSector } from "../../models/sector";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

export default function SectorDetails({ sector }) {
  const [name, setName] = useState(sector.name);
  const [description, setDescription] = useState(sector.description);
  const [showEdit, setShowEdit] = useState(false);

  async function sendUpdatedSector() {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/sectors`,
      {
        id: sector._id,
        name,
        description,
      }
    );
  }

  return (
    <Layout pageTitle={"Secteur Détails"}>
      <div className="flex gap-2 items-center justify-center mt-8">
        <h1 className="text-secondary text-4xl">Secteur {sector.name}</h1>
        {showEdit ? (
          <CloseIcon
            sx={{ color: "#00477A", fontSize: 40 }}
            className="cursor-pointer"
            onClick={() => setShowEdit(!showEdit)}
          />
        ) : (
          <EditIcon
            sx={{ color: "#00477A", fontSize: 40 }}
            className="cursor-pointer"
            onClick={() => setShowEdit(!showEdit)}
          />
        )}
      </div>
      {showEdit && (
        <div className="w-11/12 flex flex-col gap-4 items-center mt-4">
          <form className="flex flex-col gap-2">
            <h2 className="text-secondary text-2xl">
              Éditer le secteur {sector.name}
            </h2>
            <label
              htmlFor="sectorName"
              className="text-fourth/50 flex gap-4 justify-between"
            >
              Name :
              <input
                id="sectorName"
                type="text"
                className="rounded-xl border-2 bg-transparent w-2/3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label
              htmlFor="sectorDescription"
              className="text-fourth/50 flex gap-4 justify-around items-center"
            >
              Description :
              <textarea
                id="sectorDescription"
                className="rounded-xl border-2 bg-transparent w-2/3 h-20"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
          </form>
          <p
            className="bg-greenPlantation w-fit p-2 rounded-xl text-third font-medium cursor-pointer"
            onClick={() => sendUpdatedSector()}
          >
            Valider
          </p>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const sectors = await getAllSectors();
  return {
    paths: sectors.map((sector) => {
      return {
        params: { id: sector._id.toString() },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  const sector = JSON.parse(JSON.stringify(await getOneSector(id)));
  return {
    props: { sector },
  };
}
