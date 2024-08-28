// src/pages/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import Historia from '../components/Historia';
import SeccionEspecial from '../components/SeccionEspecial';
import IndexPage from './index'; // Ruta ajustada a './index'

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/seccion-especial" element={<SeccionEspecial />} />
        {/* Añade más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;
