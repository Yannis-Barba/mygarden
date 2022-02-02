function Fiche({product}) {
    const months=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

    function extractPeriod(array, start, end){
        const startIndex = array.findIndex((elt) => elt === start);
        const endIndex = array.findIndex((elt) => elt === end);
        if(startIndex <= endIndex){
            console.log(startIndex, endIndex)
            return array.slice(startIndex, endIndex+1)
        }
        return array.slice(startIndex, array.length).concat(array.slice(0, endIndex+1))
    }

    return (
        <div className="bg-white drop-shadow-xl cursor-pointer p-4 rounded-xl flex gap-4">
            <img src="./pictures/carrot.svg" alt={product.name} className="w-20 h-20"/>
            <div className="flex flex-col">
                <h2 className="text-2xl">{product.name}</h2>
                <h3 className="font-thin">{product.genre}</h3>
            </div>
        </div>
    );
}

export default Fiche;