import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { getAllButtes, getOneButte } from "../../models/butte";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useRouter } from "next/router";

export default function ButteDetails({ butte }) {
  const [name, setName] = useState(butte.name);
  const [description, setDescription] = useState(butte.description);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [listOfSectors, setListOfSectors] = useState([]);
  const [selectedSector, setSelectedSector] = useState(butte.sector);
  const [sendStatus, setSendStatus] = useState(false);

  const router = useRouter();

  async function sendUpdatedButte() {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/buttes`,
      {
        id: butte._id,
        name,
        description,
        sectord: selectedSector,
      }
    );
    setSendStatus(res.status === 200);
  }

  async function deleteButte() {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/buttes`,
      {
        params: { id: butte._id },
      }
    );
    setSendStatus(res.status === 204);
    router.push({
      pathname: "/buttes",
    });
  }

  async function getSectors() {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/sectors`
    );
    setListOfSectors(res.data);
  }

  useEffect(() => {
    getSectors();
  }, []);
  return (
    <Layout pageTitle={"Secteur Détails"}>
      <div className="flex gap-2 items-center justify-center mt-8">
        <h1 className="text-secondary text-4xl">{butte.name}</h1>
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
        <DeleteIcon
          sx={{ color: "#962C2C", fontSize: 40 }}
          className="cursor-pointer"
          onClick={() => setShowConfirmDelete(!showConfirmDelete)}
        />
      </div>
      {showConfirmDelete && (
        <div className="flex flex-col gap-2 mt-4 md:w-full md:items-center">
          <h2 className="text-five">
            Êtes vous sûr de vouloir supprimer ce produit ?{" "}
          </h2>
          <div className="flex w-full justify-center gap-2">
            <div
              className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-secondary"
              onClick={() => setShowConfirmDelete(false)}
            >
              <h2 className="text-third font-medium">Annuler</h2>
              <CloseIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
            </div>
            <div
              className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-brownSemis"
              onClick={() => deleteButte()}
            >
              <h2 className="text-third font-medium">Oui</h2>
              <DeleteIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
            </div>
          </div>
        </div>
      )}
      {showEdit && (
        <div className="w-11/12 flex flex-col gap-4 items-center mt-4">
          <form className="flex flex-col gap-2">
            <h2 className="text-secondary text-2xl">Éditer la {butte.name}</h2>
            <label
              htmlFor="butteName"
              className="text-fourth/50 flex gap-4 justify-between"
            >
              Name :
              <input
                id="butteName"
                type="text"
                className="rounded-xl border-2 bg-transparent w-2/3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label
              htmlFor="butteDescription"
              className="text-fourth/50 flex gap-4 justify-around items-center"
            >
              Description :
              <textarea
                id="butteDescription"
                className="rounded-xl border-2 bg-transparent w-2/3 h-20"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <div>
              <h3 className="text-fourth/50">Secteur</h3>
              <ul className="flex gap-4">
                {listOfSectors.map((sector) => {
                  return (
                    <li
                      key={sector._id}
                      className={`${
                        selectedSector === sector._id
                          ? "bg-orangeRecolte"
                          : "bg-fourth/50"
                      } text-third font-semibold p-2 border-fourth border-2  rounded-lg cursor-pointer`}
                      onClick={() => setSelectedSector(sector._id)}
                    >
                      {" "}
                      {sector.name}{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </form>
          <p
            className="bg-greenPlantation w-fit p-2 rounded-xl text-third font-medium cursor-pointer"
            onClick={() => sendUpdatedButte()}
          >
            Valider
          </p>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const buttes = await getAllButtes();
  return {
    paths: buttes.map((butte) => {
      return {
        params: { id: butte._id.toString() },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  const butte = JSON.parse(JSON.stringify(await getOneButte(id)));
  return {
    props: { butte },
  };
}
