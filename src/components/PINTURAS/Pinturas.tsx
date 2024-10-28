import React from "react";
import "../PINTURAS/pinturas.css"
import CardPhotos from "./CardPhoto";


const Pinturas: React.FC = () => {
  return (
    <div className="viewPinturas">
      <h1 className="TitleGallery">Galería de Arte</h1>
      <p className="Subtittle">
        Explora la colección de obras maestras de nuestro artista
      </p>
      <div className="Cards">
        <CardPhotos imagenSrc="Fotoinicial" title={"Javier Martínez"} age={"2020"} />
        <CardPhotos imagenSrc="Fotoinicial" title={"Javier Martínez"} age={"2020"} />

      </div>
    </div>
  )
}

export default Pinturas