import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function CreateProduct({
  setShowCreateProduct,
  showCreateProduct,
  forUpdate = false,
  product,
}) {
  const [name, setName] = useState(product ? product.name : "");
  const [genre, setGenre] = useState(product ? product.genre : "");
  const [semisStart, setSemisStart] = useState(
    product ? product.semisStart : "janvier"
  );
  const [semisEnd, setSemisEnd] = useState(
    product ? product.semisEnd : "janvier"
  );
  const [plantationStart, setPlantationStart] = useState(
    product ? product.plantationStart : "janvier"
  );
  const [plantationEnd, setPlantationEnd] = useState(
    product ? product.plantationEnd : "janvier"
  );
  const [recolteStart, setRecolteStart] = useState(
    product ? product.recolteStart : "janvier"
  );
  const [recolteEnd, setRecolteEnd] = useState(
    product ? product.recolteEnd : "janvier"
  );
  const [imgUrl, setImgUrl] = useState(product ? product.imgUrl : "");
  const [newGoodAssociation, setNewGoodAssociation] = useState("");
  const [newBadAssociation, setNewBadAssociation] = useState("");
  const [goodAssociation, setGoodAssociation] = useState(
    product ? product.goodAssociation : []
  );
  const [badAssociation, setBadAssociation] = useState(
    product ? product.badAssociation : []
  );

  const [sendStatus, setSendStatus] = useState(false);

  async function sendNewProduct() {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`,
      {
        name,
        genre,
        semisStart,
        semisEnd,
        plantationStart,
        plantationEnd,
        recolteStart,
        recolteEnd,
        imgUrl,
        goodAssociation,
        badAssociation,
      }
    );
    setSendStatus(res.status === 201);
    setShowCreateProduct(false);
  }

  async function sendUpdatedProduct() {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`,
      {
        id: product._id,
        name,
        genre,
        semisStart,
        semisEnd,
        plantationStart,
        plantationEnd,
        recolteStart,
        recolteEnd,
        imgUrl,
        goodAssociation,
        badAssociation,
      }
    );
    setSendStatus(res.status === 201);
    setShowCreateProduct(false);
  }

  function addNewGoodAssociation() {
    goodAssociation.push(newGoodAssociation);
    setNewGoodAssociation("");
  }

  function addNewBadAssociation() {
    badAssociation.push(newBadAssociation);
    setNewBadAssociation("");
  }

  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  return (
    <div className=" bg-third h-fit flex flex-col justify-center items-center max-w-11/12 md:w-full">
      <form className="bg-third py-4 px-2 flex flex-col gap-4 rounded-xl border-2 w-11/12 md:flex md:flex-row md:flex-wrap">
        <h1 className="text-secondary text-2xl w-full text-center mb-4">
          {forUpdate ? "Éditer " : "Ajouter"} un produit
        </h1>
        <label
          htmlFor="name"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Name
          <input
            id="name"
            type="text"
            className="rounded-xl border-2 bg-transparent w-2/3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label
          htmlFor="genre"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Genre
          <input
            id="genre"
            type="text"
            className="rounded-xl border-2 bg-transparent w-2/3"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          ></input>
        </label>
        <h3>Période de semis : </h3>
        <label
          htmlFor="semisStart"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Début
          <select
            id="semisStart"
            className="rounded-xl border-2 bg-transparent p-1"
            value={semisStart}
            onChange={(e) => setSemisStart(e.target.value)}
          >
            {months.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
        </label>
        <label
          htmlFor="semisEnd"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Fin
          <select
            id="semisEnd"
            className="rounded-xl border-2 bg-transparent p-1"
            value={semisEnd}
            onChange={(e) => setSemisEnd(e.target.value)}
          >
            {months.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
        </label>
        <h3>Période de plantation : TEST</h3>
        <label
          htmlFor="plantationStart"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Début
          <select
            id="plantationStart"
            className="rounded-xl border-2 bg-transparent p-1"
            value={plantationStart}
            onChange={(e) => setPlantationStart(e.target.value)}
          >
            {months.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
        </label>
        <label
          htmlFor="plantationEnd"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Fin
          <select
            id="plantationEnd"
            className="rounded-xl border-2 bg-transparent p-1"
            value={plantationEnd}
            onChange={(e) => setPlantationEnd(e.target.value)}
          >
            {months.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
        </label>
        <h3>Période de récolte : </h3>
        <label
          htmlFor="recolteStart"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Début
          <select
            id="recoltesStart"
            className="rounded-xl border-2 bg-transparent p-1"
            value={recolteStart}
            onChange={(e) => setRecolteStart(e.target.value)}
          >
            {months.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
        </label>
        <label
          htmlFor="recolteEnd"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Fin
          <select
            id="recolteEnd"
            className="rounded-xl border-2 bg-transparent p-1"
            value={recolteEnd}
            onChange={(e) => setRecolteEnd(e.target.value)}
          >
            {months.map((month, index) => {
              return <option key={index}>{month}</option>;
            })}
          </select>
        </label>
        <label
          htmlFor="imgUrl"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Image
          <input
            id="imgUrl"
            type="text"
            className="rounded-xl border-2 bg-transparent w-2/3"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          ></input>
        </label>
        <h3>Association(s) : </h3>
        <label
          htmlFor="goodAssociation"
          className="text-fourth/50 flex gap-4 items-center justify-around"
        >
          {" "}
          Bonne(s)
          <input
            id="goodAssociation"
            type="text"
            className="rounded-xl border-2 bg-transparent w-2/3"
            value={newGoodAssociation}
            onChange={(e) => setNewGoodAssociation(e.target.value)}
          ></input>
          <div
            className="bg-secondary/80 w-fit p-2 rounded-xl text-third font-medium cursor-pointer"
            onClick={() => addNewGoodAssociation()}
          >
            Ok
          </div>
        </label>
        {goodAssociation.length !== 0 && (
          <ul className="flex flex-wrap gap-4">
            {goodAssociation.map((product, index) => {
              return (
                <li
                  key={index}
                  className="bg-green-500/60 p-2 rounded-xl flex gap-2 items-center"
                >
                  <h4>{product}</h4>
                  <CloseIcon
                    sx={{ color: "#FFFFF4", fontSize: 20 }}
                    className="cursor-pointer"
                    onClick={() => {
                      setGoodAssociation(() =>
                        goodAssociation.filter((val) => val !== product)
                      );
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
        <label
          htmlFor="badAssociation"
          className="text-fourth/50 flex gap-4 justify-around items-center"
        >
          {" "}
          Mauvaise(s)
          <input
            id="badAssociation"
            type="text"
            className="rounded-xl border-2 bg-transparent w-2/3"
            value={newBadAssociation}
            onChange={(e) => setNewBadAssociation(e.target.value)}
          ></input>
          <div
            className="bg-secondary/80 w-fit p-2 rounded-xl text-third font-medium cursor-pointer"
            onClick={() => addNewBadAssociation()}
          >
            Ok
          </div>
        </label>
        {goodAssociation.length !== 0 && (
          <ul className="flex flex-wrap gap-4">
            {badAssociation.map((product, index) => {
              return (
                <li
                  key={index}
                  className="bg-red-500/60 p-2 rounded-xl flex gap-2 items-center"
                >
                  <h4>{product}</h4>
                  <CloseIcon
                    sx={{ color: "#FFFFF4", fontSize: 20 }}
                    className="cursor-pointer"
                    onClick={() => {
                      setBadAssociation(() =>
                        badAssociation.filter((val) => val !== product)
                      );
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
        <div className="w-full flex gap-4 justify-center">
          <div
            className="bg-brownSemis w-fit p-2 rounded-xl text-third font-medium cursor-pointer"
            onClick={() => setShowCreateProduct(!showCreateProduct)}
          >
            Annuler
          </div>
          <div
            className="bg-greenPlantation w-fit p-2 rounded-xl text-third font-medium cursor-pointer"
            onClick={() =>
              forUpdate ? sendUpdatedProduct() : sendNewProduct()
            }
          >
            Valider
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
