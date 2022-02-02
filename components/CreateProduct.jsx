import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

function CreateProduct({setShowCreateProduct}) {

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [semisStart, setSemisStart] = useState("janvier");
    const [semisEnd, setSemisEnd] = useState("janvier");
    const [plantationStart, setPlantationStart] = useState("janvier");
    const [plantationEnd, setPlantationEnd] = useState("janvier");
    const [recolteStart, setRecolteStart] = useState("janvier");
    const [recolteEnd, setRecolteEnd] = useState("janvier");
    const [imgUrl, setImgUrl] = useState("")


    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    return (
        <div className="absolute bg-gray-500/50 h-full w-full p-10 flex flex-col justify-center items-center">
            <CloseIcon sx={{color: "#FFFFF4", fontSize: 50}} className="cursor-pointer" onClick={() => setShowCreateProduct(false)}/>
            <form className="bg-third py-4 px-2 flex flex-col gap-4 rounded-xl">
                <h1 className="text-secondary text-4xl w-full text-center mb-4">Ajouter un produit</h1>
                <label htmlFor="name" className="text-fourth/50 flex gap-4"> Name
                    <input id="name"type="text" className="rounded-xl border-2 bg-transparent" value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label htmlFor="genre" className="text-fourth/50 flex gap-4"> Genre
                    <input id="genre"type="text" className="rounded-xl border-2 bg-transparent" value={genre} onChange={(e) => setGenre(e.target.value)}></input>
                </label>
                <h3>Période de semis : </h3>
                <label htmlFor="semisStart" className="text-fourth/50 flex gap-4" > Début
                <select id="semisStart" className="rounded-xl border-2 bg-transparent p-1" value={semisStart} onChange={(e) => setSemisStart(e.target.value)}>
                        {months.map((month, index) => {
                            return (
                                <option key={index}>{month}</option>
                            )
                        })}
                    </select>
                </label>
                <label htmlFor="semisEnd" className="text-fourth/50 flex gap-4" > Fin
                <select id="semisEnd" className="rounded-xl border-2 bg-transparent p-1" value={semisEnd} onChange={(e) => setSemisEnd(e.target.value)}>
                        {months.map((month, index) => {
                            return (
                                <option key={index}>{month}</option>
                            )
                        })}
                    </select>
                </label>
                <h3>Période de plantation : </h3>
                <label htmlFor="plantationStart" className="text-fourth/50 flex gap-4" > Début
                    <select id="plantationStart" className="rounded-xl border-2 bg-transparent p-1" value={plantationStart} onChange={(e) => setPlantationStart(e.target.value)}>
                        {months.map((month, index) => {
                            return (
                                <option key={index}>{month}</option>
                            )
                        })}
                    </select>
                </label>
                <label htmlFor="plantationEnd" className="text-fourth/50 flex gap-4" > Fin
                <select id="plantationEnd" className="rounded-xl border-2 bg-transparent p-1" value={plantationEnd} onChange={(e) => setPlantationEnd(e.target.value)}>
                        {months.map((month, index) => {
                            return (
                                <option key={index}>{month}</option>
                            )
                        })}
                    </select>
                </label>
                <h3>Période de récolte : </h3>
                <label htmlFor="recolteStart" className="text-fourth/50 flex gap-4" > Début
                <select id="recoltesStart" className="rounded-xl border-2 bg-transparent p-1" value={recolteStart} onChange={(e) => setRecolteStart(e.target.value)}>
                        {months.map((month, index) => {
                            return (
                                <option key={index}>{month}</option>
                            )
                        })}
                    </select>
                </label>
                <label htmlFor="recolteEnd" className="text-fourth/50 flex gap-4" > Fin
                <select id="recolteEnd" className="rounded-xl border-2 bg-transparent p-1" value={recolteEnd} onChange={(e) => setRecolteEnd(e.target.value)}>
                        {months.map((month, index) => {
                            return (
                                <option key={index}>{month}</option>
                            )
                        })}
                    </select>
                </label>
                <label htmlFor="imgUrl" className="text-fourth/50 flex gap-4"> Image
                    <input id="imgUrl" type="text" className="rounded-xl border-2 bg-transparent" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}></input>
                </label>
                <div className="w-full flex justify-center">
                    <div className="bg-secondary/80 w-fit p-2 rounded-xl text-third font-medium">Valider</div>
                </div>
            </form>
            
        </div>
    );
}

export default CreateProduct;