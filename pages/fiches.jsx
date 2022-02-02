import { useEffect, useState } from "react";

import CreateProduct from "../components/CreateProduct";
import Layout from "../components/Layout";
import AddIcon from '@mui/icons-material/Add';

import axios from "axios";
import Fiche from "../components/Fiche";

function fiches() {
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    const [listOfProducts, setListOfProducts] = useState([]);

    async function getProducts(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`);
        setListOfProducts(res.data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Layout pageTitle={"Fiches"}>
            <div>
                {showCreateProduct && <CreateProduct setShowCreateProduct={setShowCreateProduct}/>}
                {!showCreateProduct && <div id="addProduct" className=" absolute right-4 top-1/5 bg-secondary/80 w-fit rounded-full cursor-pointer" onClick={() => setShowCreateProduct(!showCreateProduct)}>
                    <AddIcon sx={{color: "#FFFFF4", fontSize: 60}}/>
                </div>}
            </div>
            <h1 className="text-secondary text-4xl w-full text-center mb-4">Fiches</h1>
            {listOfProducts.length !== 0 ? (
                <ul className="flex flex-col gap-4 py-4 px-4 items-center w-full">
                        {listOfProducts.map((product) => {
                            return (
                                <li key={product._id} className="w-4/5">
                                    <Fiche product={product}/>
                                </li>
                            )
                    })}
                </ul>
            ): <p>Pas de produits en base de données</p>}
        </Layout>
    );
}

export default fiches;