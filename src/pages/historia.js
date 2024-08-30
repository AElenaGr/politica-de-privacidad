// src/pages/historia.js
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Historia from '../components/Historia';
import '../styles/historia.css';  // Asegúrate de que el CSS esté correcto
import Footer from '../components/Footer';

const HistoriaPage = () => {
  return (
    <main>
      <header>
        <Header />
        <Menu />
      </header>
      <section className="content">
        <Historia />
      </section>
      <Footer />
    </main>
  );
};

export default HistoriaPage;

export const Head = () => <title>Historia de Patrimonio Nacional</title>;
