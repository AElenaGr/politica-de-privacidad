// src/pages/ministerio.js
import * as React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import "../styles/ministerio.css"

const MinisterioPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <h1>Ministerio de la Presidencia</h1>
        <p>
          Aquí va el contenido sobre el Ministerio de la Presidencia y su vínculo con el Patrimonio Nacional...
        </p>
      </section>
    </main>
  )
}

export default MinisterioPage

export const Head = () => <title>Ministerio de la Presidencia</title>
