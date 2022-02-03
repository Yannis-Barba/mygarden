import Layout from "../../components/Layout";
import { getManyRecoltes, getOneRecolte } from "../../models/recolte";
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
