import React from "react";
import "../styles/components/Section1.css"
import image from "../assets/images/bg_img.png";

const Section1 = () => {
  return (
    <div className="section_1">
      <img src={image} alt="La brume a la montagne" />
      <h2 className="section-name">Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Section1;
