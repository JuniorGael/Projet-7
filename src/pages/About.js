import React from "react";
import { accordionData } from "../components/Data";
import ExpendableColumn from "../components/ExpendableColumn";
import imageAbout from "../assets/images/bg_imgAbout.png";
import "../styles/pages/About.css";

const About = () => {
  return (
    <>
      <div className="bg-container">
        <img src={imageAbout} alt="La montagne enneigée" />
      </div>
      <div className="accordion-ul">
        {accordionData &&
          accordionData.map((section, index) => (
            <ExpendableColumn
              key={index}
              title={section.title}
              text={section.content}
            />
          ))}
      </div>
    </>
  );
};

export default About;
