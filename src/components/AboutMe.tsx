import React, { useState } from "react";
import Imagen1 from "../assets/fotosSobreMi/Imagen1.jpg"
import Imagen2 from "../assets/fotosSobreMi/Imagen2.jpg"
import Imagen4 from "../assets/fotosSobreMi/Imagen4.jpg"


const AboutMe: React.FC = () => {
  const [photos, setPhotos] = useState([Imagen4, Imagen2, Imagen1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < photos.length - 1) {
        return prevIndex + 1;
      } else {
        return 0
      }
    })
  };


  return (
    <div className="AboutMe">
      <div className="contenedorPresentacion">
        <div className="cajaDescripcion">
          <h1>Sobre mí</h1>
          <p>
            ¡Hola! Soy Javier, un apasionado por el arte con décadas de experiencia en el sector. Disfruto especialmente creando figuras personalizadas desde cero, utilizando materiales reciclados. Me encanta trabajar con el diseño de locales comerciales, donde combino arte y funcionalidad para transformar espacios en experiencias únicas y memorables. Mi arte refleja mi profunda conexión con la vida. Cada obra es una expresión única de mi creatividad y mi compromiso con la sostenibilidad. Te invito a explorar mi galería, donde cada pieza cuenta una historia personal y emocionante. ¡Gracias por visitarme!
          </p>
        </div>
        <div className="cajaImagen">
          <img
            src={photos[currentIndex]}
            className="imagen"
            width={500}
            height={500}
            onClick={nextPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
