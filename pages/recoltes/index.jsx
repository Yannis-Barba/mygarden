import Layout from "../../components/Layout";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import NewRecolte from "../../components/NewRecolte";
import axios from "axios";
import Recolte from "../../components/Recolte";
import dayjs from "dayjs";

function Recoltes() {
    const [showAddNewRecolte, setShowAddNewRecolte] = useState(false);

    const [listOfLastRecoltes, setListOfLastRecoltes] = useState([]);
    const [listOfNextRecoltes, setListOfNextRecoltes] = useState([]);

    async function getRecoltes(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/recoltes`);
        sortByDate(res.data);
    }

    function sortByDate(arr){
        const currentDate = dayjs().format("YYYY-MM-DD");
        for(let recolte of arr){
            if(recolte.date >= currentDate){
                setListOfNextRecoltes((listOfNextRecoltes) => [...listOfNextRecoltes, recolte])
            } else {
                setListOfLastRecoltes((listOfLastRecoltes) => [...listOfLastRecoltes, recolte])
            }
        }
    }

    useEffect(() => {
        getRecoltes();

    }, [])

    return (
        <Layout>
            <div className="w-full pl-4 flex flex-col gap-2 mb-8">
                <h1 className="text-secondary text-4xl w-full text-center mb-4">Récoltes</h1>
                <div id="addProduct" className="flex gap-2 items-center w-fit rounded-full cursor-pointer text-five" onClick={() => setShowAddNewRecolte(!showAddNewRecolte)}>
                        <p className="text-lg"> Ajouter une nouvelle récolte</p>
                        <AddIcon sx={{color: "#A4A4A4", fontSize: 30}} className="border-2 rounded-full"/>
                </div>
                {showAddNewRecolte && (
                    <div> 
                        <NewRecolte setShowAddNewRecolte={setShowAddNewRecolte} />
                    </div>
                )}
                <div>
                    <h2>Récoltes à venir</h2>
                    {listOfNextRecoltes.length !== 0 && (
                        <ul className="flex flex-col gap-2">
                            {listOfNextRecoltes.map((recolte) => {
                                return (
                                    <li key={recolte._id}>
                                        <Recolte recolte={recolte}/>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
                <div>
                    <h2>Dernière Récoltes</h2>
                    {listOfLastRecoltes.length !== 0 && (
                        <ul className="flex flex-col gap-2">
                            {listOfLastRecoltes.map((recolte) => {
                                return (
                                    <li key={recolte._id}>
                                        <Recolte recolte={recolte}/>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Recoltes;