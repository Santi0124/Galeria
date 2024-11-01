import React from "react";
import "../PINTURAS/pinturas.css";
import CardPhotos from "./CardPhoto";
import Cuadro1 from "../../assets/fotosCuadros/Cuadro1.jpg";
import Cuadro2 from "../../assets/fotosCuadros/Cuadro2.jpg";
import Cuadro3 from "../../assets/fotosCuadros/Cuadro3.jpg";
import Cuadro31 from "../../assets/fotosCuadros/Cuadro31.jpg";
import Cuadro4 from "../../assets/fotosCuadros/Cuadro4.jpg";
import Cuadro5 from "../../assets/fotosCuadros/Cuadro5.jpg";
import Cuadro6 from "../../assets/fotosCuadros/Cuadro6.jpg";
import Cuadro61 from "../../assets/fotosCuadros/Cuadro61.jpg";
import Cuadro7 from "../../assets/fotosCuadros/Cuadro7.jpg";
import Cuadro8 from "../../assets/fotosCuadros/Cuadro8.jpg";
import Cuadro9 from "../../assets/fotosCuadros/Cuadro9.jpg";
import Cuadro10 from "../../assets/fotosCuadros/Cuadro10.jpg";
import Cuadro11 from "../../assets/fotosCuadros/Cuadro11.jpg";
import Cuadro12 from "../../assets/fotosCuadros/Cuadro12.jpg";
import Cuadro14 from "../../assets/fotosCuadros/Cuadro14.jpg";
import Cuadro16 from "../../assets/fotosCuadros/Cuadro16.jpg";

const Pinturas: React.FC = () => {
    const artWorks = [
        { imagenSrc: Cuadro4, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro1, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro3, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro2, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro61, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro6, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro7, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro9, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro10, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro16, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro11, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro31, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro5, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro12, title: "Javier Martínez", age: "2020" },
        { imagenSrc: Cuadro14, title: "Javier Martínez", age: "2020" },

    ];

    return (
        <div className="viewPinturas">
            <h1 className="TitleGallery">Galería de Arte</h1>
            <p className="Subtittle">
                Explora la colección de obras maestras de nuestro artista
            </p>
            <div className="Cards">
                {artWorks.map((artWork, index) => (
                    <CardPhotos key={index} artWork={artWork} />
                ))}
            </div>
        </div>
    );
};

export default Pinturas;
