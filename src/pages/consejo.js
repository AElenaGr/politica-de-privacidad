import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ConsejoAdministracion from '../components/ConsejoAdministracion';

const ConsejoPage = () => {
  return (
    <main>
      <header>
        <Header />
        <Menu />
      </header>
      <ConsejoAdministracion />
    </main>
  );
};

export default ConsejoPage;

export const Head = () => <title>Consejo de Administración | Patrimonio Nacional</title>;
