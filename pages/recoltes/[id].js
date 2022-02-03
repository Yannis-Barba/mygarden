import Fiche from "../../components/Fiche";
import Layout from "../../components/Layout";
import { getManyRecoltes, getOneRecolte } from "../../models/recolte";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CreateProduct from "../../components/CreateProduct";
import axios from "axios";
import { useRouter } from "next/router";
import Recolte from "../../components/Recolte";
import dayjs from "dayjs";
import NewRecolte from "../../components/NewRecolte";

export default function FicheDetails({ recolte }) {
  return (
    <Layout pageTitle={"Fiche details"}>
      <h1> Récolte {recolte.product} </h1>
      <h3>Le {dayjs(recolte.date).format("DD MMMM YYYY")}</h3>
      <NewRecolte forUpdate={true} recolte={recolte} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const recoltes = await getManyRecoltes();
  return {
    paths: recoltes.map((recolte) => {
      return {
        params: { id: recolte._id.toString() },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  const recolte = JSON.parse(JSON.stringify(await getOneRecolte(id)));
  return {
    props: { recolte },
  };
}
