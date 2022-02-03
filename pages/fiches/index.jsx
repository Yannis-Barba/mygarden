import { useEffect, useState } from "react";

import CreateProduct from "../../components/CreateProduct";
import Layout from "../../components/Layout";
import AddIcon from '@mui/icons-material/Add';

import axios from "axios";
import Fiche from "../../components/Fiche";

function fiches() {
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    async function getProducts(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`);
        setListOfProducts(res.data);
    }

    useEffect(() => {
        if(!showCreateProduct){
            getProducts();
        }

    }, [showCreateProduct])

    return (
        <Layout pageTitle={"Fiches"}>
            <h1 className="text-secondary text-5xl w-full text-center mb-4 mt-4">Fiches</h1>
            <div className="pl-8 md:flex md:items-center flex flex-col gap-4">
                <label htmlFor="searchProduct" className="text-five md:flex">
                    Rechercher un produit : 
                    <input id="searchProduct" className="rounded-xl border-2 bg-transparent w-2/3" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} onFocus={() => setShowSearch(true)} onBlur={() => setTimeout(() => setShowSearch(false), 200)}></input>
                </label>
                {showSearch && 
                <div className="bg-white w-2/3 border-2 border-five rounded-lg py-2 px-4 mt-16 absolute z-40">
                    <ul>
                        {listOfProducts.filter((product) => product.name.includes(searchProduct)).map((product, index) => {
                            return (
                                <li key={index} onClick={() => setSearchProduct(product.name)} className="cursor-pointer rounded-lg p-1 hover:bg-secondary/30">{product.name}</li>
                            )
                        })}
                    </ul>
                </div>}
                <p>ou</p>
                {showCreateProduct && <CreateProduct setShowCreateProduct={setShowCreateProduct} showCreateProduct={showCreateProduct}/>}
                    {!showCreateProduct && (
                    <div id="addProduct" className="flex gap-2 items-center w-fit rounded-full cursor-pointer text-five" onClick={() => setShowCreateProduct(!showCreateProduct)}>
                        <p className="text-lg"> Ajouter un nouveau produit</p>
                        <AddIcon sx={{color: "#A4A4A4", fontSize: 30}} className="border-2 rounded-full"/>
                    </div>
                    )}
            </div>
            {listOfProducts.length !== 0 ? (
                <ul className="flex flex-col gap-4 py-4 px-4 items-center w-full md:flex md:flex-row md:flex-wrap">
                        {listOfProducts.filter((product) => product.name.includes(searchProduct)).map((product) => {
                            return (
                                <li key={product._id} className="w-fit">
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