// src/pages/index.js
import React from 'react';
import '../styles/index.css';
import Header from '../components/Header'; // Ajusta la ruta según sea necesario
import Menu from '../components/Menu';     // Ajusta la ruta según sea necesario

const IndexPage = () => {
  return (
    <main>
      <header>
        <Header />
        <Menu />
      </header>
      <section className="content">
        <h1>Bienvenida de la Presidenta</h1>
        <p>
          Bienvenidos al sitio oficial de Patrimonio Nacional. Aquí podrás conocer nuestra
          historia, estructura, y las diversas actividades y actos oficiales que organizamos.
        </p>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Patrimonio Nacional</title>;
