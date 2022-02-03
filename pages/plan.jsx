import Link from "next/link";
import Layout from "../components/Layout";

function plan() {
    return (
        <Layout>
            <div>
                <h1>Plan</h1>
            </div>
            <div>
                <h2>Gestion des Secteurs et Buttes</h2>
                <div className="flex gap-2 justify-center items-center">
                    <Link passHref href="/sectors">
                        <h3 className="bg-orangeRecolte p-2 rounded-lg text-third font-semibold cursor-pointer">Secteurs</h3>
                    </Link>
                    <Link passHref href="/buttes">
                        <h3 className="bg-greenPlantation p-2 rounded-lg text-third font-semibold cursor-pointer">Buttes </h3>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default plan;