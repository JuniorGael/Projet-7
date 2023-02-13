import React from "react";
import "../styles/components/Footer.css";
import logoFooter from "../assets/images/logoFooter.png";
const Footer = () => {
  return (
    <footer className="footer-container">
        <img src={logoFooter} alt=" logo du footer" className="footer-img" />
        <p className="footer-content">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
