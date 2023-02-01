import React from "react";
import "../styles/components/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <NavLink
          className="navbar-list-link"
          to="/"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "" };
          }}
        >
          <li className="navbar-name">Accueil</li>
        </NavLink>

        <NavLink
          className="navbar-list-link"
          to="/About"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "" };
          }}
        >
          <li className="navbar-name">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
