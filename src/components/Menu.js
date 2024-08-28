// src/components/Menu.js
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia">Conoce nuestra historia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consejo">Consejo de Administración</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/actos">Actos oficiales e institucionales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/casa-real">Casa de S.M. el Rey</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/retratos">Retratos Oficiales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ministerio">Ministerio de la Presidencia</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
