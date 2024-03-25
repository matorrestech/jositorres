import React from "react"
import "./Start.css"

import fleurDeLis from "../../assets/fleurDeLis.png"

export default function Start() {
    return (
        <>
            <section className="start" id="home">
                <div className="container">
                    <div className="fleurDeLis">
                        <img src={fleurDeLis} alt="Fleur De Lis" />
                    </div>
                    <div className="text">
                        <p className="hello">Olá, Eu sou</p>

                        <p className="josiTorres">Josi Torres</p>

                        <p className="nailDesigner">Nail Designer</p>
                    </div>

                    <div className="button">
                        <a
                            href="https://book.heygoldie.com/Josi-Torres-Nails/checkout"
                            className="btnAppointment"
                            target="_blank"
                        >
                            Agende seu Horário
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
