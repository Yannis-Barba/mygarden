function CreateProduct() {
    return (
        <div className="absolute bg-gray-500/50 h-full w-full p-10">
            <form className="bg-third py-4 px-2 flex flex-col gap-4 rounded-xl">
                <h1 className="text-secondary text-4xl w-full text-center mb-4">Ajouter un produit</h1>
                <label htmlFor="name" className="text-fourth/50 flex gap-4"> Name
                    <input id="name"type="text" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <label htmlFor="genre" className="text-fourth/50 flex gap-4"> Genre
                    <input id="genre"type="text" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <h3>Période de semis : </h3>
                <label htmlFor="semisStart" className="text-fourth/50 flex gap-4"> Début
                    <input id="semisStart" type="date" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <label htmlFor="semisEnd" className="text-fourth/50 flex gap-4"> Fin
                    <input id="semisEnd" type="date" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <h3>Période de plantation : </h3>
                <label htmlFor="plantationStart" className="text-fourth/50 flex gap-4"> Début
                    <input id="plantationStart" type="date" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <label htmlFor="plantationEnd" className="text-fourth/50 flex gap-4"> Fin
                    <input id="plantationEnd" type="date" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <h3>Période de récolte : </h3>
                <label htmlFor="recolteStart" className="text-fourth/50 flex gap-4"> Début
                    <input id="recolteStart" type="date" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <label htmlFor="recolteEnd" className="text-fourth/50 flex gap-4"> Fin
                    <input id="recolteEnd" type="date" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <label htmlFor="imgUrl" className="text-fourth/50 flex gap-4"> Image
                    <input id="imgUrl" type="text" className="rounded-xl border-2 bg-transparent"></input>
                </label>
                <div className="bg-secondary/80 w-fit p-2 rounded-xl text-third font-medium">Valider</div>
            </form>
            
        </div>
    );
}

export default CreateProduct;