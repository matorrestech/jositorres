import React from "react"
import "./Footer.css"

import fleurDeLis from "../../assets/fleurDeLis.png"

export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="text">
                        <p>
                            Sou brasileira natural de Borborema no interior de
                            São Paulo e Nail Designer em Bournemouth no litoral
                            da Inglaterra.
                        </p>
                    </div>
                    <div className="logo">
                        <img src={fleurDeLis} alt="" />
                        <span>Josi Torres</span>
                    </div>
                    <div className="btnHome">
                        <a href="#home">
                            <i className="mdi mdi-arrow-up-thin-circle-outline"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
