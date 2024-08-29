// src/pages/retratos.js
import * as React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RetratosOficiales from "../components/RetratosOficiales";
import "../styles/retratos-oficiales.css";

const RetratosPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <RetratosOficiales />
      </section>
    </main>
  );
};

export default RetratosPage;

export const Head = () => <title>Retratos Oficiales</title>;
