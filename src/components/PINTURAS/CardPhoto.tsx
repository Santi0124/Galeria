import React from "react";
import "../PINTURAS/cardPhotos.css"
import Cuadro1 from "../../assets/fotosCuadros/Cuadro1.jpg"

interface artWork {
    imagenSrc: string,
    title: string,
    age: string
}
interface CardPhotosProps {
    artWork: artWork
}

const CardPhotos: React.FC<CardPhotosProps> = ({ artWork }) => {

    return (
        <div className="CardPhotos">
            <div className="artwork-card">
                <div className="image-wrapper">
                    <img src={artWork.imagenSrc} alt={artWork.title} className="artwork-image" />
                </div>
                <div className="artwork-info">
                    <h2>{artWork.title}</h2>
                    <p>{artWork.age}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPhotos