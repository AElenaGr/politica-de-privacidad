// src/pages/consejo.js
import * as React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import "../styles/consejo.css"

const ConsejoPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <h1>Consejo de Administración</h1>
        <p>
          Aquí va el contenido sobre el Consejo de Administración del Patrimonio Nacional...
        </p>
      </section>
    </main>
  )
}

export default ConsejoPage

export const Head = () => <title>Consejo de Administración</title>
