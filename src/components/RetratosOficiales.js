// src/components/RetratosOficiales.js
import React from 'react';
import '../styles/retratos-oficiales.css';

const RetratosOficiales = () => {
  return (
    <section className="retrato-oficiales">
      <h1>Retratos Oficiales</h1>

      <h2>Retratos Oficiales de Su Majestad el Rey</h2>
      <div className="retrato">
        <img src="URL_DE_LA_IMAGEN" alt="S.M. el Rey" />
        <p>
          <strong>S.M. el Rey</strong><br />
          © Casa de S.M. el Rey<br />
          Formato: 50 x 60 cm y 30 x 40 cm<br />
          Depósito legal: M-5986-2020<br />
          NIPO: 093-20-006-X<br />
          <a href="URL_DESCARGA_IMAGEN_1" download>Descargar imagen en alta resolución (13.62 MB)</a>
        </p>
      </div>

      <div className="retrato">
        <img src="URL_DE_LA_IMAGEN" alt="S.M. el Rey con indumentaria de gala" />
        <p>
          <strong>S.M. el Rey con indumentaria de gala en el Palacio Real de Madrid</strong><br />
          © Casa de S.M. el Rey<br />
          Formato: 50 x 60 cm y 30 x 40 cm<br />
          Depósito legal: M-5983-2020<br />
          NIPO: 093-20-006-X<br />
          <a href="URL_DESCARGA_IMAGEN_2" download>Descargar imagen en alta resolución (15.4 MB)</a>
        </p>
      </div>

      {/* Repite el bloque <div className="retrato"> para cada imagen */}
      
      <h2>Retratos Oficiales de Su Majestad la Reina</h2>
      {/* Añade las imágenes y detalles correspondientes */}
      
      <h2>Retratos Oficiales de Sus Majestades los Reyes</h2>
      {/* Añade las imágenes y detalles correspondientes */}
      
      <h2>Retratos Oficiales de Su Alteza Real la Princesa de Asturias</h2>
      {/* Añade las imágenes y detalles correspondientes */}

      <h2>Retratos Oficiales de Su Alteza Real la Infanta Doña Sofía</h2>
      {/* Añade las imágenes y detalles correspondientes */}

      <p className="aviso-legal">
        La propiedad de los derechos de las imágenes pertenece a la Casa de Su Majestad el Rey.
        Queda terminantemente prohibida su comercialización, así como cualquier clase de manipulación que altere su contenido informativo.
      </p>
      <a href="URL_PDF_LAMINAS" download>
        Pedido de láminas (116.1 KB)
      </a>
    </section>
  );
};

export default RetratosOficiales;
