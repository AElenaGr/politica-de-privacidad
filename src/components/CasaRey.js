// src/components/CasaRey.js
import React from 'react';
import '../styles/casa-real.css'; // Asegúrate de que el CSS esté adecuado

const CasaRey = () => {
  return (
    <section className="casa-rey">
      <h1>La Casa de S.M. el Rey</h1>
      <p>
        La Casa de Su Majestad el Rey es el organismo encargado de la organización y coordinación de las actividades oficiales del Rey de España. 
        Además, se encarga de coordinar las actividades oficiales del Rey y su familia, organizar las visitas de jefes de Estado y otros eventos de carácter protocolario.
      </p>
      <p>
        La Casa Real trabaja en estrecha colaboración con el Gobierno de España y otras instituciones para asegurar el cumplimiento de las funciones protocolarias y ceremoniales del Rey.
      </p>
      <p>
        La familia real, encabezada por el Rey, también desempeña un papel importante en la representación internacional de España, así como en diversas actividades culturales, sociales y benéficas.
      </p>
      <p>
        Para obtener más información sobre la Casa Real y las actividades del Rey de España, visite el sitio oficial de la Casa de S.M. el Rey:
      </p>
      <a href="https://www.casareal.es/ES/Paginas/home.aspx" target="_blank" rel="noopener noreferrer">
        Casa de S.M. el Rey
      </a>
    </section>
  );
};

export default CasaRey;
