import React from "react";
import "../styles/pages/Page404.css";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  document.title = 'kasa-Error404';
  return (
    <div className="error404-container">
      <div className="error404-titles">
        <h1 className="errorTitle">404</h1>
        <p className="errorTxt">
          <span>Oups! La page que</span>&nbsp;
          <span>vous demandez n'existe pas.</span>
        </p>
      </div>
      <NavLink to="/" className="backToHome">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default Page404;
