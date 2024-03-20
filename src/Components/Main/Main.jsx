import React from "react"
import "./Main.css"

import florDeLis from "../../assets/flordelis.png"

export default function Main() {
    return (
        <>
            <div className="main">
                <div className="florDeLis">
                    <img src={florDeLis} alt="" />
                </div>
                <div className="texto">
                    <p className="ola">Olá, Eu sou</p>

                    <p className="josiTorres">Josi Torres</p>

                    <p className="nailDesigner">Nail Designer</p>
                </div>

                <div className="button">
                    <button className="btnAgendamento">
                        Agende seu Horário
                    </button>
                </div>
            </div>
        </>
    )
}
