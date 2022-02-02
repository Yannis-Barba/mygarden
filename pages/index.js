import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import MainSection from "../components/MainSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle={"My Garden"}>
      <h1 className="w-full text-center mt-10 text-4xl text-secondary font-semi-bold">
        My Garden
      </h1>
      <div className="flex flex-wrap gap-6 mt-10 justify-center items-center">
        <MainSection
          path="fiches"
          title="FICHES"
          icon={"./pictures/fiches.svg"}
        />
        <MainSection
          path="planning"
          title="PLANNING"
          icon={"./pictures/calendar.svg"}
        />
        <MainSection path="data" title="DONNÉES" icon={"./pictures/data.svg"} />
        <MainSection
          path="ressources"
          title="RESSOURCES"
          icon={"./pictures/books.svg"}
        />
        <MainSection path="plan" title="PLAN" icon={"./pictures/plan.svg"} />
        <MainSection
          path="recoltes"
          title="RÉCOLTES"
          icon={"./pictures/balance.svg"}
        />
      </div>
    </Layout>
  );
}
