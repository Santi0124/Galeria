import React from "react";
import "../components/body.css";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import AboutMe from "./AboutMe";


const Body: React.FC = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <AboutMe/>
    </div>
  );
};

export default Body;
