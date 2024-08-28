import React from 'react';
import '../styles/historia.css';

const Historia = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <h2 className="text-uppercase">Conoce Nuestra Historia</h2>
          <h3 className="text-uppercase">Sobre Patrimonio Nacional</h3>
          <p className="lead">Palacio Real</p>
          <p>
            Patrimonio Nacional es un organismo público regulado por una Ley específica de 1982, 
            Ley 23/1982, de 16 de junio, heredera de una larga serie de disposiciones entre las cuales cabe destacar las leyes de 1865, 1869, 1876, 1932 y 1940, 
            aparte de las ordenanzas anteriores al siglo XIX. En definitiva, esta entidad estatal constituye el núcleo esencial y más importante del antiguo Real Patrimonio, 
            o Patrimonio de la Corona, denominado Patrimonio de la República por la Ley de 1932, y con su nombre actual por las leyes de 1940 y 1982.
          </p>
          <h4 className="mt-4">Doble función: Constitucional y cultural</h4>
          <p>
            La función de este organismo público, dependiente del Ministerio de la Presidencia, 
            Relaciones con las Cortes y Memoria Democrática es doble: el apoyo a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, 
            y la puesta a disposición de los ciudadanos del patrimonio histórico-artístico a través de su uso con fines culturales, científicos y docentes.
          </p>
          <h4 className="mt-4">Palacios y estaciones del año</h4>
          <p>
            Los reyes, como en la inmensa mayoría de las diferentes cortes europeas de la Edad Moderna, vivían mucho tiempo fuera de la capital. 
            Cada parte del año la pasaban en uno de los Reales Sitios en torno a Madrid: primavera en Aranjuez, verano en Valsaín y La Granja, 
            otoño en El Escorial, invierno en El Pardo y en Madrid. Esta villa era sede oficial de la corte, pero realmente la vida del poder transcurría al ritmo de las estaciones 
            en todos estos escenarios donde a su servicio se aunaban bosques y cazaderos, parques y jardines, palacios, colecciones y urbanismo.
          </p>
          <h4 className="mt-4">Desde la Edad Media hasta hoy</h4>
          <p>
            El proceso creativo de este patrimonio se produce desde el principio de la Edad Media y arranca de la definición de los reinos que se fueron definiendo en la Península: 
            una larga serie tanto de palacios como de edificios religiosos vinculados a la respectiva monarquía de cada reino -los reales patronatos, como las Huelgas- 
            jalonan la representatividad de la monarquía en cada uno de los territorios que, como resultado de un largo proceso de uniones dinásticas, 
            terminó por concretarse al inicio de la Edad Moderna en la Monarquía de España.
          </p>
          <h4 className="mt-4">La configuración definitiva de los Reales Sitios</h4>
          <p>
            Bajo los Austrias y los Borbones, a partir de la instalación de la capital en Madrid por Felipe II en 1561 y su fundación de El Escorial en 1563. 
            Los bosques, jardines y cultivos, sobre todo en Aranjuez, fueron perfeccionados por Felipe V, creador de La Granja de San Ildefonso, 
            y por Fernando VI y Carlos III, que hizo de cada Real Sitio una pequeña ciudad modelo, a la par que ampliaba los palacios.
          </p>
          <h4 className="mt-4">De la Corona al Estado</h4>
          <p>
            Bajo el reinado de Fernando VII y el fin del antiguo régimen se distingue por primera vez de manera clara entre bienes del Estado y bienes de este conjunto vinculado a la Corona llamado Real Patrimonio.
            Será en 1865, con la primera ley que lo regula, cuando nazca oficialmente la institución “Patrimonio de la Corona” bajo el reinado de Isabel II.
          </p>
          <h4 className="mt-4">La Ley de 1932 y la Ley de 1982</h4>
          <p>
            La Ley de 1932 defendió la unidad de este conjunto de bienes y definió por primera vez la doble función, cultural y representativa, 
            de este “Patrimonio de la República”, nombre que se transformó en “Nacional” por la de 1940, que esencialmente sigue el patrón de la anterior.
          </p>
          <h4 className="mt-4">La importancia de Patrimonio Nacional</h4>
          <p>
            La Ley 23/1982, de 16 de junio, del Patrimonio Nacional, norma jurídica que en la actualidad regula esta entidad, 
            reconoce a la institución como organismo público responsable de los bienes de titularidad del Estado que proceden del legado de la Corona española.
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src="../images/history.jpg" alt="Nuestra historia" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Historia;
