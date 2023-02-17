import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Chambers from "./pages/Chambers";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Chambers/:id" element={<Chambers />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
