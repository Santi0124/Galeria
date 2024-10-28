import React from "react";
import "../PINTURAS/cardPhotos.css"
import Imagen1 from "../../assets/fotosSobreMi/Imagen1.jpg"

interface artWork {
    imagenSrc: string,
    title: string,
    age: string
}


const CardPhotos: React.FC<artWork> = () => {

    const artWorks: artWork[] = [
        { imagenSrc: Imagen1, title: "Javier Martínez", age: "2020" },
    ]

    return (
        <div className="CardPhotos">
            {artWorks.map((artWork, index) => (
                <div key={index} className="artwork-card">
                    <div className="image-wrapper">
                        <img src={artWork.imagenSrc} alt={artWork.title} className="artwork-image" />
                    </div>
                    <div className="artwork-info">
                        <h2>{artWork.title}</h2>
                        <p>{artWork.age}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardPhotos