// src/pages/ministerio.js
import * as React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import "../styles/ministerio.css"
import MinisterioContent from "../components/MinisterioContent"
import Footer from "../components/Footer"

const MinisterioPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <MinisterioContent />
      <Footer />
    </main>
  );
};

export default MinisterioPage;

export const Head = () => <title>Ministerio de la Presidencia</title>;