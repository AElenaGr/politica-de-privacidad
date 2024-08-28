// src/pages/casa-real.js
import * as React from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"
import "../styles/casa-real.css"

const CasaRealPage = () => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="content">
        <h1>Casa de S.M. el Rey</h1>
        <p>
          Aquí va el contenido sobre la Casa de S.M. el Rey y su relación con el Patrimonio Nacional...
        </p>
      </section>
    </main>
  )
}

export default CasaRealPage

export const Head = () => <title>Casa de S.M. el Rey</title>
