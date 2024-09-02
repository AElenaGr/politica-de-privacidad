import React from 'react';
import { Link } from 'gatsby';
import '../styles/index.css';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import presidentaImg from '../images/presidenta.jpeg';

const IndexPage = () => {
  return (
    <main>
      <header>
        <Header />
        <Menu />
      </header>
      <section className="content">
        <h1>Bienvenida de la Presidenta</h1>
        <img src={presidentaImg} alt="ANA DE LA CUEVA FERNÁNDEZ" className="presidenta-img" />
        <h3>Ana de la Cueva, Presidenta de Patrimonio Nacional</h3>
        <p>
          
          Bienvenidos a Patrimonio Nacional.
        </p>
        <p>
          Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles,
          170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental.
          Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar
          a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.
        </p>
        <p>
          Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas
          y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales
          monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales
          como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros,
          por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros
          talleres. A nuestras publicaciones.
        </p>
        <p>
          Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de
          forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar
          de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso
          queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de
          elemento de cohesión en nuestra sociedad.
        </p>
        <p className="signature">
          Ana de la Cueva<br />
          Presidenta de Patrimonio Nacional
        </p>
        
        {/* Nuevos enlaces añadidos */}
        <div className="links">
          <h2>Enlaces de Interés</h2>
          <ul>
            <li><Link to="/casa-real">Casa de S.M. el Rey</Link></li>
            <li><Link to="/retratos">Retratos Oficiales</Link></li>
            <li><Link to="/actos">Actos Oficiales e Institucionales</Link></li>
            <li><Link to="/historia">Conoce Nuestra Historia</Link></li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Patrimonio Nacional</title>;
