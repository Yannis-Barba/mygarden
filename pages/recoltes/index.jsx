import Layout from "../../components/Layout";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import NewRecolte from "../../components/NewRecolte";

function recoltes() {
    const [showAddNewRecolte, setShowAddNewRecolte] = useState(false);

    return (
        <Layout>
            <div className="w-full pl-4 flex flex-col gap-2">
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
                </div>
                <div>
                    <h2>Dernière Récoltes</h2>
                </div>
            </div>
        </Layout>
    );
}

export default recoltes;