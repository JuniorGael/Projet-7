import React from "react";
import "../styles/pages/Page404.css";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="error-container">
      <h1 className="errorTitle">404</h1>
      <p className="errorTxt">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="backToHome">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default Page404;
