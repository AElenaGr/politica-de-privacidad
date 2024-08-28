// src/pages/Historia.js
import React from "react";
import "../styles/historia.css";

const Historia = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h2 className="text-uppercase">Nuestra Historia</h2>
          <p className="lead">Descubre cómo empezó todo.</p>
        </div>
        <div className="col-lg-6">
          <img src="../images/history.jpg" alt="Nuestra historia" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Historia;
