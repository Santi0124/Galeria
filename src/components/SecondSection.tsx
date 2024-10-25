import React from "react";
import Card from "../components/Card";


const SecondSection: React.FC = () => {
  return (
    <div className="custom-container">
      <Card
        title={"Pinturas Originales"}
        description={"Explora la colección de pinturas originales de Javier, cada una con su propio estilo y carácter único."}
        buttonText={"Ver Pinturas"}
        />
      <Card
        title={"Decoración Comercial"}
        description={"Javier ofrece soluciones de decoración personalizadas para tu negocio o espacio comercial."}
        buttonText={" Descubre Decoración"} />
      <Card title={"Figuras Personalizadas"}
        description={"Encarga tus propias figuras personalizadas, hechas a mano por Javier."}
        buttonText={"Personaliza tu Figura"} />
    </div>
  );
};

export default SecondSection;
