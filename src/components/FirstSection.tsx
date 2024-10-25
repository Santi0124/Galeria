import React from "react";
import FotoInicial from "../assets/fotoInicial/Fotoinicial.jpg"

const FirstSection: React.FC = () => {
  const enviarMensajeWhatsApp = () => {
    const mensaje = "";
    const numeroTelefono = "677653348";
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="containerPrincipal">
      <div className="contenedorPresentacion">
        <div className="cajaImagen">
          <img
            src={FotoInicial}
            alt="Imagen"
            className="imagen"
            width={550}
            height={600}
          />
        </div>
        <div className="cajaDescripcion">
          <h1>Creaciones artísticas Javier Martinez</h1>
          <p>
            Javier es una artista apasionado que se inspira en la naturaleza y la vida cotidiana. Su enfoque único y su estilo distintivo se reflejan en cada una de sus obras, ya sean pinturas, decoraciones comerciales o figuras personalizadas.
          </p>
          <button
            className="card-button"
            onClick={enviarMensajeWhatsApp}>
            CONTACTO
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
