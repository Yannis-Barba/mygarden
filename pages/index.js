import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import MainSection from "../components/MainSection";
import styles from "../styles/Home.module.css";

import FileCopyIcon from "@mui/icons-material/FileCopy";
import EventIcon from "@mui/icons-material/Event";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MapIcon from "@mui/icons-material/Map";
import ScaleIcon from "@mui/icons-material/Scale";

export default function Home() {
  return (
    <Layout pageTitle={"My Garden"}>
      <h1 className="w-full text-center mt-10 text-4xl text-secondary font-semi-bold">
        Mon Jardin
      </h1>
      <div className=" w-full flex flex-wrap gap-6 mt-10 justify-center items-center">
        <MainSection
          path="fiches"
          title="FICHES"
          icon={<FileCopyIcon sx={{ color: "#962C2C", fontSize: 100 }} />}
        />
        <MainSection
          path="planning"
          title="PLANNING"
          icon={<EventIcon sx={{ color: "#00477A", fontSize: 100 }} />}
        />
        <MainSection
          path="data"
          title="DONNÉES"
          icon={
            <DataThresholdingIcon sx={{ color: "#42AC59", fontSize: 100 }} />
          }
        />
        <MainSection
          path="ressources"
          title="RESSOURCES"
          icon={<MenuBookIcon sx={{ color: "#E4AD1E", fontSize: 100 }} />}
        />
        <MainSection
          path="plan"
          title="PLAN"
          icon={<MapIcon sx={{ color: "#EB860F", fontSize: 100 }} />}
        />
        <MainSection
          path="recoltes"
          title="RÉCOLTES"
          icon={<ScaleIcon sx={{ color: "#69009A", fontSize: 100 }} />}
        />
      </div>
    </Layout>
  );
}
