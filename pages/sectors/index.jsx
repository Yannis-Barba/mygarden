import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout"

function Sectors() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [listOfSectors, setListOfSectors] = useState([])

    const [sendStatus, setSendStatus] = useState(false);

    async function sendSector(){
        const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/sectors`, {
            name,
            description
        })
        setSendStatus(res.status === 201);
    }

    async function getSectors(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/sectors`);
        setListOfSectors(res.data);
    }

    useEffect(() => {
        getSectors();
    }, [])

    return (
        <Layout pageTitle={"Secteurs"}>
            <div className="w-11/12 flex flex-col gap-4 items-center mt-4">
                <h1 className="text-secondary text-4xl">Secteurs</h1>
                <form className="flex flex-col gap-2">
                    <h2 className="text-secondary text-2xl">Créer un nouveau secteur</h2>
                    <label htmlFor="sectorName" className="text-fourth/50 flex gap-4 justify-between">
                        Name : 
                        <input id="sectorName" type="text" className="rounded-xl border-2 bg-transparent w-2/3" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>
                    <label htmlFor="sectorDescription" className="text-fourth/50 flex gap-4 justify-around items-center">
                        Description : 
                        <textarea id="sectorDescription" className="rounded-xl border-2 bg-transparent w-2/3 h-20" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </label>
                </form>
                <p className="bg-greenPlantation w-fit p-2 rounded-xl text-third font-medium cursor-pointer" onClick={() => sendSector()}>Valider</p>
            </div>
            <div className="w-11/12 flex flex-col gap-4 mt-4">
                <h2 className="text-secondary text-2xl">Liste des secteurs</h2>
                <ul className="flex flex-wrap gap-4">
                    {listOfSectors.map((sector) => {
                        return (
                            <Link key={sector._id} passHref href={`/sectors/${sector._id}`}>
                                <li key={sector._id} className="border-fourth/30 border-2 p-2 rounded-lg text-third font-semibold bg-orangeRecolte cursor-pointer">{sector.name}</li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    );
}

export default Sectors;