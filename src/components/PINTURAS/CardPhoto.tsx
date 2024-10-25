import React from "react";
import "../PINTURAS/cardPhotos.css"

interface artWork {
    imagenSrc?: string,
    tittle?: string,
    age?: string
}


const CardPhotos: React.FC<artWork> = () => {

    const artWorks = [
        { imagenSrc: "ruta/de/la/imagen/", title: "", age: "" }
    ]



    return (
        <div className="CardPhotos">
            <h1></h1>
        </div>
    )
}

export default CardPhotos