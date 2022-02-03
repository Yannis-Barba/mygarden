import Layout from "../../components/Layout";
import { getAllSectors, getOneSector } from "../../models/sector";

export default function SectorDetails({ sector }) {
  return <Layout pageTitle={"Secteur Détails"}>{sector.name}</Layout>;
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
