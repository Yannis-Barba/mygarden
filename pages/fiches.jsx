import CreateProduct from "../components/CreateProduct";
import Layout from "../components/Layout";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

function fiches() {
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    return (
        <Layout pageTitle={"Fiches"}>
            <div>
                {showCreateProduct && <CreateProduct setShowCreateProduct={setShowCreateProduct}/>}
                <div id="addProduct" className="bg-secondary/80 w-fit rounded-full cursor-pointer" onClick={() => setShowCreateProduct(!showCreateProduct)}>
                    <AddIcon sx={{color: "#FFFFF4", fontSize: 50}}/>
                </div>
            </div>
        </Layout>
    );
}

export default fiches;