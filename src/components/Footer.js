import React from 'react';
import '../styles/Footer.css';
import MinisterioLogo from '../images/image.png'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={MinisterioLogo} alt="Ministerio de la Presidencia, Justicia y Relaciones con las Cortes" />
      </div>
      <div className="footer-content">
        <p>&copy; 2024 Patrimonio Nacional. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="https://www.patrimonionacional.es" target="_blank" rel="noopener noreferrer">Patrimonio Nacional</a></li>
            <li><a href="https://www.mpr.gob.es" target="_blank" rel="noopener noreferrer">Ministerio de la Presidencia</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/politica-privacidad">Política de Privacidad</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
