import Link from "next/link";
import { useEffect, useState } from "react";

function Fiche({product}) {
    const months=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    const [semisPeriod, setSemisPeriod] = useState([]);
    const [plantationPeriod, setPlantationPeriod] = useState([]);
    const [recoltePeriod, setRecoltePeriod] = useState([]);

    function extractPeriod(array, start, end){
        const startIndex = array.findIndex((elt) => elt === start);
        const endIndex = array.findIndex((elt) => elt === end);
        if(startIndex <= endIndex){
            console.log(startIndex, endIndex)
            return array.slice(startIndex, endIndex+1)
        }
        return array.slice(startIndex, array.length).concat(array.slice(0, endIndex+1))
    }

    useEffect(() => {
        setSemisPeriod(() => extractPeriod(months, product.semisStart, product.semisEnd));
        setPlantationPeriod(() => extractPeriod(months, product.plantationStart, product.plantationEnd));
        setRecoltePeriod(() => extractPeriod(months, product.recolteStart, product.recolteEnd));
    }, [])

    return (
        <Link passHref href={`/fiches/${product._id}`}>
        <div className="bg-white drop-shadow-xl cursor-pointer p-4 rounded-xl flex flex-col gap-4 w-full md:w-11/12">
            <div className="flex gap-4 w-11/12">
                <img src="./pictures/carrot.svg" alt={product.name} className="w-20 h-20"/>
                <div className="flex flex-col">
                    <h2 className="text-2xl">{product.name}</h2>
                    <h3 className="font-thin">{product.genre}</h3>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <ul className="flex w-full">
                    {months.map((month, index) => {
                        return (
                            <li key={index} className="py-1 text-xl w-1/12  text-center">{month[0].toUpperCase()}</li>
                        )
                    })}
                </ul>
                <ul className="flex w-full">
                {months.map((month, index) => {
                    if(semisPeriod.includes(month)){
                        return (
                            <li key={index} className="py-1 border-2 text-md bg-brownSemis text-third font-semibold w-1/12 text-center">S</li>
                        )
                    }
                    return (
                        <li key={index} className="py-1 border-2 text-sm w-1/12 text-center">--</li>
                    )
                })}
                </ul>
                <ul className="flex w-full">
                {months.map((month, index) => {
                    if(plantationPeriod.includes(month)){
                        return (
                            <li key={index} className="py-1 border-2 text-md bg-greenPlantation text-third font-semibold w-1/12 text-center">P</li>
                        )
                    }
                    return (
                        <li key={index} className="py-1 border-2 text-sm w-1/12 text-center">--</li>
                    )
                })}
                </ul>
                <ul className="flex w-full">
                {months.map((month, index) => {
                    if(recoltePeriod.includes(month)){
                        return (
                            <li key={index} className="py-1 border-2 text-md bg-orangeRecolte text-third font-semibold w-1/12 text-center">R</li>
                        )
                    }
                    return (
                        <li key={index} className="py-1 border-2 text-sm w-1/12 text-center">--</li>
                    )
                })}
                </ul>
            </div>
        </div>
        </Link>
    );
}

export default Fiche;