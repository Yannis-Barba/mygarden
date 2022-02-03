import { useEffect, useState } from "react";
import axios from "axios";
import CreateProduct from "./CreateProduct";
import AddIcon from '@mui/icons-material/Add';

function NewRecolte({setShowAddNewRecolte, forUpdate=false, recolte}) {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [searchProduct, setSearchProduct] = useState("");
    const [showCreateProduct, setShowCreateProduct] = useState(false);

    const [product, setProduct] = useState("");
    const [productId, setProductId] = useState("");
    const [date, setDate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [weight, setWeight] = useState("");

    const [sendStatus, setSendStatus] = useState(false);

    async function getProducts(){
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`);
        setListOfProducts(res.data);
    }

    async function sendNewRecolte(){
        const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/recoltes`, {
            product,
            productId,
            date, 
            quantity, 
            weight
        })
        setSendStatus(res.status === 201)
    }

    async function sendUpdatedRecolte(){

    }

    useEffect(() => {
        if(!showCreateProduct){
            getProducts();
        }

    }, [showCreateProduct])

    // console.log("product: ", product)
    return (
        <div>
            <form>
                <label htmlFor="searchProduct" className="text-five md:flex">
                    Rechercher un produit : 
                    <input id="searchProduct" className="rounded-xl border-2 bg-transparent w-2/3" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} onFocus={() => setShowSearch(true)} onBlur={() => setTimeout(() => setShowSearch(false), 200)}></input>
                </label>
                {showSearch && 
                <div className={`bg-white w-2/3 border-2 border-five rounded-lg py-2 px-4 mt-2 absolute z-40`}>
                    <ul>
                        {listOfProducts.filter((product) => product.name.includes(searchProduct)).map((product) => {
                            return (
                                <li key={product._id} onClick={() => {setProduct(product.name); setProductId(product._id); setSearchProduct(product.name); setShowSearch(false)}} className="cursor-pointer rounded-lg p-1 hover:bg-secondary/30">{product.name}</li>
                            )
                        })}
                    </ul>
                </div>
                }
                <p> ou </p>
                {showCreateProduct && <CreateProduct setShowCreateProduct={setShowCreateProduct} showCreateProduct={showCreateProduct}/>}
                    {!showCreateProduct && (
                    <div id="addProduct" className="flex gap-2 items-center w-fit rounded-full cursor-pointer text-five" onClick={() => setShowCreateProduct(!showCreateProduct)}>
                        <p className="text-lg"> Ajouter un nouveau produit</p>
                        <AddIcon sx={{color: "#A4A4A4", fontSize: 30}} className="border-2 rounded-full"/>
                    </div>
                    )}
                    <h2 className="w-full text-center text-greenPlantation text-2xl my-4">{product}</h2>
                <label htmlFor="date" className="text-fourth/50 flex gap-4"> Date
                    <input id="date"type="date" className="rounded-xl border-2 bg-transparent w-2/3" value={date} onChange={(e) => setDate(e.target.value)}></input>
                </label>
                <label htmlFor="quantity" className="text-fourth/50 flex gap-4"> Quantité 
                    <input id="quantity"type="text" className="rounded-xl border-2 bg-transparent w-2/3" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                </label>
                <label htmlFor="weight" className="text-fourth/50 flex gap-4"> Poids
                    <input id="weight"type="text" className="rounded-xl border-2 bg-transparent w-2/3" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                </label>
                <div className="w-full flex gap-4 justify-center">
                    <div className="bg-brownSemis w-fit p-2 rounded-xl text-third font-medium cursor-pointer" onClick={() => setShowAddNewRecolte(false)}>Annuler</div>
                    <div className="bg-greenPlantation w-fit p-2 rounded-xl text-third font-medium cursor-pointer" onClick={() => forUpdate ? sendUpdatedRecolte() : sendNewRecolte()}>Valider</div>

                </div>
            </form>
        </div>
    );
}

export default NewRecolte;