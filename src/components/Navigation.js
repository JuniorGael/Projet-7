import React from "react";
import "../styles/components/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink
          className="navbar-link"
          to="/"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "" };
          }}
        >
          Accueil
        </NavLink>

        <NavLink
          className="navbar-link"
          to="/About"
          style={({ isActive }) => {
            return { textDecoration: isActive ? "underline" : "" };
          }}
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
