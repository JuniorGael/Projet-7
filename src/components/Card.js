import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Card.css";

const Card = ({ housingData }) => {
  return (
      <NavLink to={`/Chambers/${housingData.id}`} className="card">
        <img src={housingData.cover} alt="images de logements" />
        <h2 className="card-name">{housingData.title}</h2>
      </NavLink>
  );
};

export default Card;
