import React from "react";
import { useNavigate } from 'react-router-dom';


interface ButtonProps {
  name: string,
  link: string
}

const ButtonHeader: React.FC<ButtonProps> = ({ name, link }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(link)
  }

  return (
    <div>
      <a
        className="a"
        onClick={handleButtonClick}>
        {name}
      </a>
    </div>
  );
}

export default ButtonHeader;
