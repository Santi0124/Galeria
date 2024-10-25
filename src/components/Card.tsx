import React from "react";
import "../components/body.css";
import { Router, useNavigate } from "react-router-dom";
import Pinturas from "./PINTURAS/Pinturas";


interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}



const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {

  const navigate = useNavigate()

  const goToAbout = () => {
    navigate("/Pintura")
  }
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button
        className="card-button"
        onClick={goToAbout}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Card;

