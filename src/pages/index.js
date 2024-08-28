import React from 'react';
import { Link } from 'gatsby';
import '../styles/index.css';
import Header from '../components/Header';
import Menu from '../components/Menu';

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
