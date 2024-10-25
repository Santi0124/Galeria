import React from "react";
import ButtonHeader from "./ButtonHeader";  
import Signed from "./Signed";  
import './header.css';
import { BrowserRouter, Router } from "react-router-dom";

interface ButtonProps {
  name: string;
  className?: string;
}

const Header: React.FC<ButtonProps> = () => {
  return (
    <header className="App-header">
      <div className="divButton">
        <Signed /> 
        <div className="buttonGroup">
          <ButtonHeader name="Pintura" link="/Pintura" />
          <ButtonHeader name="Decoración comercial" link="/Decoración_comercial" />
          <ButtonHeader name="Figuras personalizadas" link="/Figuras_personalizadas" />
        </div>
      </div>
    </header>
  );
}

export default Header
