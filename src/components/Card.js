import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Card.css";

const Card = ({ housingData }) => {
  return (
    <div className="card-container">
      <NavLink to={`/Chambers/${housingData.id}`} className="card-link">
        <div className="card-img">
          <img src={housingData.cover} alt="images de logements" />
          <div className="overlay"></div>
        </div>
        <h2 className="card-name">{housingData.title}</h2>
      </NavLink>
    </div>
  );
};

export default Card;
