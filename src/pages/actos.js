// src/pages/actos.js
import * as React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import "../styles/actos.css"

const ActosPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <h1>Actos Oficiales e Institucionales</h1>
        <p>
          Aquí va el contenido sobre los actos oficiales e institucionales organizados por el Patrimonio Nacional...
        </p>
      </section>
    </main>
  )
}

export default ActosPage

export const Head = () => <title>Actos Oficiales e Institucionales</title>
