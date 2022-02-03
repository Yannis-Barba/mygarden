import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout"

function Buttes() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [listOfButtes, setListOfButtes] = useState([])
    const [listOfSectors, setListOfSectors] = useState([]);
    const [selectedSector, setSelectedSector] = useState("");

    const [filteredSectors, setFilteredSectors] = useState([])

    const [sendStatus, setSendStatus] = useState(false);

    function filterOfSector(id){
        if(filteredSectors.includes(id)){
            const newFilter = filteredSectors.filter((sectorId) => sectorId !== id)
            setFilteredSectors(newFilter)
        } else {
            const newFilter = [...filteredSectors, id];
            setFilteredSectors(newFilter)
        }
    }

    async function getSectors(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/sectors`);
        setListOfSectors(res.data);
        res.data.map((sector) => {
            const newFilter = [...filteredSectors, sector._id];
            setFilteredSectors(newFilter)
        })
    }

    async function getButtes(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/buttes`)
        setListOfButtes(res.data);
    }

    async function sendButte(){
        const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/buttes`, {
            name, 
            description, 
            sector: selectedSector
        })
        setSendStatus(res.status === 201);
    }

    useEffect(() => {
        getSectors();
    }, [])

    useEffect(() => {
        getButtes();
    }, [sendStatus])

    console.log("filtered sectors : ", filteredSectors)
    return (
        <Layout pageTitle={"Buttes"}>
            <div className="w-11/12 flex flex-col gap-4 items-center mt-4">
                <h1 className="text-secondary text-4xl">Buttes</h1>
                <form className="flex flex-col gap-2">
                    <h2 className="text-secondary text-2xl">Créer une nouvelle butte</h2>
                    <label htmlFor="sectorName" className="text-fourth/50 flex gap-4 justify-between">
                        Name : 
                        <input id="sectorName" type="text" className="rounded-xl border-2 bg-transparent w-2/3" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>
                    <label htmlFor="sectorDescription" className="text-fourth/50 flex gap-4 justify-around items-center">
                        Description : 
                        <textarea id="sectorDescription" className="rounded-xl border-2 bg-transparent w-2/3 h-20" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </label>
                    <div>
                        <h3 className="text-fourth/50">Secteur</h3>
                        <ul className="flex gap-4">
                            {listOfSectors.map((sector) => {
                                return (
                                    <li key={sector._id} className={`${selectedSector === sector._id ? "bg-orangeRecolte": "bg-fourth/50"} text-third font-semibold p-2 border-fourth border-2  rounded-lg cursor-pointer`} onClick={() => setSelectedSector(sector._id)}> {sector.name} </li>
                                )
                            })}
                        </ul>
                    </div>
                </form>
                <p className="bg-greenPlantation w-fit p-2 rounded-xl text-third font-medium cursor-pointer" onClick={() => sendButte()}>Valider</p>
            </div>
            <div className="w-11/12 flex flex-col gap-2 mt-4">
                <h2 className="text-secondary text-2xl">Liste des buttes</h2>
                <h4 className="text-secondary text-lg">Filtrer par secteur : </h4>
                <ul className="flex gap-4 flex-wrap">
                    {listOfSectors.map((sector) => {
                        return (
                            <li key={sector._id} className={`${filteredSectors.includes(sector._id) ? "bg-orangeRecolte": "bg-fourth/50"} text-third font-semibold p-2 border-fourth border-2  rounded-lg cursor-pointer`} onClick={() => filterOfSector(sector._id)}>{sector.name}</li>
                        )
                    })}
                </ul>
                <ul className="flex flex-wrap gap-4">
                    {listOfButtes.map((butte) => {
                        if(filteredSectors.includes(butte.sector)){
                            return (
                                <Link key={butte._id} passHref href={`/buttes/${butte._id}`}>
                                    <li key={butte._id} className="border-fourth/30 border-2 p-2 rounded-lg text-third font-semibold bg-greenPlantation cursor-pointer">{butte.name}</li>
                                </Link>
                            )
                        }

                    })}
                </ul>
            </div>
        </Layout>
    );
}

export default Buttes;