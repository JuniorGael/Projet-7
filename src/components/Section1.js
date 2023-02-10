import React from "react";
import "../styles/components/Section1.css";
import image from "../assets/images/banner.png";

const Section1 = () => {
  return (
    <section className="section_1">
      <img src={image} alt="La brume a la montagne" />
      <h2 className="section-name">
        <span>Chez vous,</span>&nbsp;
        <span>partout et ailleurs</span>
      </h2>
    </section>
  );
};

export default Section1;
