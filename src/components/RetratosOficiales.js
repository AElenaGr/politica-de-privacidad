import React from 'react';
import '../styles/retratos-oficiales.css';

// Importa las imágenes
import rey from '../images/rey.jpg';
import reyGala from '../images/reygalapalacioreal.jpg';
import reina from '../images/reina.jpg';
import reyes from '../images/reyespareja.jpg';
import princesa from '../images/princesaasturias.jpg';
import infanta from '../images/infanta.jpg';

const RetratosOficiales = () => {
  return (
    <section className="retratos-oficiales">
      <h1>Retratos Oficiales</h1>

      <h2>Retratos Oficiales de Su Majestad el Rey</h2>
      <div className="retrato-container">
        <div className="retrato">
          <img src={rey} alt="S.M. el Rey" />
          <p>
            <strong>S.M. el Rey</strong><br />
            © Casa de S.M. el Rey<br />
            Formato: 50 x 60 cm y 30 x 40 cm<br />
            Depósito legal: M-5986-2020<br />
            NIPO: 093-20-006-X<br />
            <a href="https://www.patrimonionacional.es/sites/default/files/2020-02/sm_el_rey_don_felipe_vi_0.zip" download>Descargar imagen en alta resolución</a>
          </p>
        </div>

        <div className="retrato">
          <img src={reyGala} alt="S.M. el Rey con indumentaria de gala" />
          <p>
            <strong>S.M. el Rey con indumentaria de gala en el Palacio Real de Madrid</strong><br />
            © Casa de S.M. el Rey<br />
            Formato: 50 x 60 cm y 30 x 40 cm<br />
            Depósito legal: M-5983-2020<br />
            NIPO: 093-20-006-X<br />
            <a href="https://www.patrimonionacional.es/sites/default/files/2020-02/sm_el_rey_don_felipe_vi_gala.zip" download>Descargar imagen en alta resolución</a>
          </p>
        </div>
      </div>

      <h2>Retratos Oficiales de Su Majestad la Reina</h2>
      <div className="retrato-container">
        <div className="retrato">
          <img src={reina} alt="S.M. la Reina" />
          <p>
            <strong>S.M. la Reina</strong><br />
            © Casa de S.M. el Rey<br />
            Formato: 50 x 60 cm y 30 x 40 cm<br />
            Depósito legal: M-5987-2020<br />
            NIPO: 093-20-007-X<br />
            <a href="https://www.patrimonionacional.es/sites/default/files/2020-02/sm_la_reina_dona_letizia.zip" download>Descargar imagen en alta resolución</a>
          </p>
        </div>

        <div className="retrato">
          <img src={reyes} alt="S.M. los Reyes" />
          <p>
            <strong>S.M. los Reyes</strong><br />
            © Casa de S.M. el Rey<br />
            Formato: 50 x 60 cm y 30 x 40 cm<br />
            Depósito legal: M-5988-2020<br />
            NIPO: 093-20-008-X<br />
            <a href="https://www.patrimonionacional.es/sites/default/files/2020-02/ssmm_los_reyes.zip" download>Descargar imagen en alta resolución</a>
          </p>
        </div>
      </div>

      <h2>Retratos Oficiales de Su Alteza Real la Princesa de Asturias</h2>
      <div className="retrato-container">
        <div className="retrato">
          <img src={princesa} alt="S.A.R. la Princesa de Asturias" />
          <p>
            <strong>S.A.R. la Princesa de Asturias</strong><br />
            © Casa de S.M. el Rey<br />
            Formato: 50 x 60 cm y 30 x 40 cm<br />
            Depósito legal: M-5989-2020<br />
            NIPO: 093-20-009-X<br />
            <a href="https://www.patrimonionacional.es/sites/default/files/2020-02/sar_princesa_asturias.zip" download>Descargar imagen en alta resolución</a>
          </p>
        </div>

        <div className="retrato">
          <img src={infanta} alt="S.A.R. la Infanta Doña Sofía" />
          <p>
            <strong>S.A.R. la Infanta Doña Sofía</strong><br />
            © Casa de S.M. el Rey<br />
            Formato: 50 x 60 cm y 30 x 40 cm<br />
            Depósito legal: M-5990-2020<br />
            NIPO: 093-20-010-X<br />
            <a href="https://www.patrimonionacional.es/sites/default/files/2020-02/sar_infanta_dona_sofia.zip" download>Descargar imagen en alta resolución</a>
          </p>
        </div>
      </div>

      <p className="aviso-legal">
        La propiedad de los derechos de las imágenes pertenece a la Casa de Su Majestad el Rey.
        Queda terminantemente prohibida su comercialización, así como cualquier clase de manipulación que altere su contenido informativo.
      </p>
      <a href="https://www.patrimonionacional.es/sites/default/files/documents/pedido_laminas_ss.mm_._los_reyes_1.pdf" download>
        Pedido de láminas (116.1 KB)
      </a>
    </section>
  );
};

export default RetratosOficiales;
