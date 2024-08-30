// src/pages/casa-real.js
import * as React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CasaRey from "../components/CasaRey"; // Asegúrate de crear este componente
import "../styles/casa-real.css"; // Asegúrate de que el CSS esté bien configurado
import Footer from "../components/Footer";

const CasaRealPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <CasaRey />
      </section>
      <Footer />
    </main>
  );
};

export default CasaRealPage;

export const Head = () => <title>Casa de S.M. el Rey</title>;
