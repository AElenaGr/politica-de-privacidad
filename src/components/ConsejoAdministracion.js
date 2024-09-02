import React from 'react';
import '../styles/consejoAdministracion.css';
import presidentaImg from '../images/presidenta.jpeg';
import mariaDoloresImg from '../images/mariadolores.jpg';
import anaMariaImg from '../images/anamaria.jpg';
import franciscoBelilImg from '../images/franciscobelil.jpg';
import mariaAngelesImg from '../images/mariaangeleshermosilla.jpg';
import albertoHerreraImg from '../images/albertoherrera.jpg';
import mariaDelCarmenImg from '../images/mariadelcarmen.jpg';
import gregorioMaranonImg from '../images/gregoriomarañon.jpg';
import juditAlexandraImg from '../images/juditalexandra.jpg';
import joseLuisImg from '../images/joseluisaleida.jpg';
import domingoMartinezImg from '../images/domingomartinezpalomo.jpg';
import javierSolanaImg from '../images/javiersolana.jpg';
import juanTejedorImg from '../images/juantejedor.jpg';
import mariaPerezImg from '../images/mariaperez.jpg';
import samuelAlonsoImg from '../images/samuelalonso.jpg';
import tomasSuarezImg from '../images/tomassuarez.jpeg';

const ConsejoAdministracion = () => {
  return (
    <section className="consejo-administracion">
      <h1>Consejo de Administración</h1>

      <h2>MIEMBROS NATOS</h2>
      <div className="miembro-container">
        <div className="miembro">
          <img src={presidentaImg} alt="ANA DE LA CUEVA FERNÁNDEZ" className="miembro-img" />
          <h3>ANA DE LA CUEVA FERNÁNDEZ</h3>
          <h4>PRESIDENTA DE PATRIMONIO NACIONAL</h4>
          <p>
            Es licenciada en Ciencias Económicas y Empresariales por la Universidad Autónoma de Madrid en la especialidad de Economía Cuantitativa.
            Ha desarrollado toda su carrera profesional en el Ministerio de Asuntos Económicos y Transformación Digital, donde ingresó por oposición
            en el Cuerpo de Técnicos Comerciales y Economistas del Estado en 1991.
          </p>
        </div>

        <div className="miembro">
          <img src={mariaDoloresImg} alt="MARÍA DOLORES MENÉNDEZ COMPANY" className="miembro-img" />
          <h3>MARÍA DOLORES MENÉNDEZ COMPANY</h3>
          <h4>GERENTE DE PATRIMONIO NACIONAL</h4>
          <p>
            Es Licenciada en Ciencias Económicas y Empresariales, rama de Economía de la Empresa, por la Universidad Complutense de Madrid. Funcionaria
            en servicio activo de la Escala Técnica de Gestión de Organismos Autónomos y en excedencia del Cuerpo Técnico de Auditoría y Contabilidad,
            Executive Master in Public Administration (EMPA) por ESADE.
          </p>
        </div>

        <div className="miembro">
          <img src={anaMariaImg} alt="ANA MARÍA ARIAS DE COSSÍO" className="miembro-img" />
          <h3>ANA MARÍA ARIAS DE COSSÍO</h3>
          <p>
            Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid.
          </p>
        </div>

        {/* Añade los otros miembros natos aquí */}
      </div>

      <h2>CONSEJEROS</h2>
      <div className="miembro-container">
        <div className="miembro">
          <img src={anaMariaImg} alt="ANA MARÍA ARIAS DE COSSÍO" className="miembro-img" />
          <h3>ANA MARÍA ARIAS DE COSSÍO</h3>
          <p>
            Doctora en Historia del Arte y catedrática emérita de la Universidad Complutense de Madrid.
          </p>
        </div>

        <div className="miembro">
          <img src={franciscoBelilImg} alt="FRANCISCO BELIL CREIXELL" className="miembro-img" />
          <h3>FRANCISCO BELIL CREIXELL</h3>
          <p>
            Ingeniero Superior en la Universidad Politécnica de Cataluña. Amplió sus estudios de ingeniería en la Universidad de Pittsburgh.
          </p>
        </div>

        <div className="miembro">
          <img src={mariaAngelesImg} alt="Mª ÁNGELES HERMOSILLA ÁLVAREZ" className="miembro-img" />
          <h3>Mª ÁNGELES HERMOSILLA ÁLVAREZ</h3>
          <p>
            Catedrática de Teoría de la Literatura y Literatura Comparada en la Universidad de Córdoba.
          </p>
        </div>

        <div className="miembro">
          <img src={albertoHerreraImg} alt="ALBERTO HERRERA RODRÍGUEZ" className="miembro-img" />
          <h3>ALBERTO HERRERA RODRÍGUEZ</h3>
          <p>
            Subsecretario del Ministerio de Presidencia, Justicia y Relaciones con las Cortes.
          </p>
        </div>

        <div className="miembro">
          <img src={mariaDelCarmenImg} alt="MARÍA DEL CARMEN IGLESIAS CANO" className="miembro-img" />
          <h3>MARÍA DEL CARMEN IGLESIAS CANO</h3>
          <p>
            Directora de la Real Academia de la Historia desde diciembre de 2014.
          </p>
        </div>

        <div className="miembro">
          <img src={gregorioMaranonImg} alt="GREGORIO MARAÑÓN Y BERTRÁN DE LIS" className="miembro-img" />
          <h3>GREGORIO MARAÑÓN Y BERTRÁN DE LIS</h3>
          <p>
            Presidente del Teatro Real y de la Fundación Ortega-Marañón.
          </p>
        </div>

        <div className="miembro">
          <img src={juditAlexandraImg} alt="JUDIT ALEXANDRA GONZÁLEZ PEDRAZ" className="miembro-img" />
          <h3>JUDIT ALEXANDRA GONZÁLEZ PEDRAZ</h3>
          <p>
            Secretaria general de la Presidencia del Gobierno.
          </p>
        </div>

        <div className="miembro">
          <img src={joseLuisImg} alt="JOSÉ LUIS MARTÍNEZ-ALMEIDA NAVASQÜÉS" className="miembro-img" />
          <h3>JOSÉ LUIS MARTÍNEZ-ALMEIDA NAVASQÜÉS</h3>
          <p>
            Alcalde de Madrid.
          </p>
        </div>

        <div className="miembro">
          <img src={domingoMartinezImg} alt="DOMINGO MARTÍNEZ PALOMO" className="miembro-img" />
          <h3>DOMINGO MARTÍNEZ PALOMO</h3>
          <p>
            Secretario general de la Casa de su Majestad el Rey.
          </p>
        </div>

        <div className="miembro">
          <img src={javierSolanaImg} alt="JAVIER SOLANA DE MADARIAGA" className="miembro-img" />
          <h3>JAVIER SOLANA DE MADARIAGA</h3>
          <p>
            Doctor en Ciencias Físicas y catedrático por la Universidad Complutense de Madrid.
          </p>
        </div>

        <div className="miembro">
          <img src={juanTejedorImg} alt="JUAN TEJEDOR CARNERO" className="miembro-img" />
          <h3>JUAN TEJEDOR CARNERO</h3>
          <p>
            Licenciado en Ciencias Económicas y Empresariales por la Universidad Complutense de Madrid.
          </p>
        </div>

        <div className="miembro">
          <img src={mariaPerezImg} alt="MARÍA PÉREZ SÁNCHEZ-LAULHÉ" className="miembro-img" />
          <h3>MARÍA PÉREZ SÁNCHEZ-LAULHÉ</h3>
          <p>
            Licenciada en Derecho por la Universidad Pontificia de Comillas (ICADE).
          </p>
        </div>

        <div className="miembro">
          <img src={samuelAlonsoImg} alt="SAMUEL ALONSO LLORENTE" className="miembro-img" />
          <h3>SAMUEL ALONSO LLORENTE</h3>
          <p>
            Maestro de Educación primaria.
          </p>
        </div>

        <div className="miembro">
          <img src={tomasSuarezImg} alt="TOMÁS SUÁREZ-INCLÁN GONZÁLEZ" className="miembro-img" />
          <h3>TOMÁS SUÁREZ-INCLÁN GONZÁLEZ</h3>
          <p>
            Abogado del Estado (1992) y abogado del Estado Jefe en Patrimonio Nacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsejoAdministracion;
