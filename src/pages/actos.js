// src/pages/actos.js
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ActosOficiales from '../components/ActosOficiales';  // Importa el nuevo componente
import '../styles/actosOficiales.css';  // Asegúrate de que este archivo exista y tenga los estilos necesarios

const ActosPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <ActosOficiales />  {/* Usa el componente aquí */}
      </section>
    </main>
  );
};

export default ActosPage;

export const Head = () => <title>Actos Oficiales e Institucionales</title>;
