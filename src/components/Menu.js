// src/components/Menu.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Mi Sitio
        </a>
        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/historia">Conoce nuestra historia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/consejo">Consejo de Administración</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/actos">Actos oficiales e institucionales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/casa-real">Casa de S.M. el Rey</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ministerio">Ministerio de la Presidencia</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
