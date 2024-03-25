import React from "react"
import "./Services.css"

import descNatural from "../../assets/natural.png"
import descNailArt from "../../assets/nailArt.png"
import descGelPolish from "../../assets/gelPolish.png"
import descExtension from "../../assets/extension.png"

export default function Services() {
    return (
        <>
            <section className="services" id="jobs">
                <h1>Meus Serviços</h1>
                <div className="container">
                    <div className="servicesItems">
                        <img src={descNatural} alt="" />
                        <p className="servicesTitle">Natural</p>
                        <p className="servicesDesc">
                            Beleza natural e limpeza que destacam a elegância
                            simples das suas unhas.
                        </p>
                    </div>
                    <div className="servicesItems">
                        <img src={descNailArt} alt="" />
                        <p className="servicesTitle">Artístico</p>
                        <p className="servicesDesc">
                            Não é apenas beleza, é uma forma de arte onde cada
                            pincelada revela um pedaço da sua alma.
                        </p>
                    </div>
                    <div className="servicesItems">
                        <img src={descGelPolish} alt="" />
                        <p className="servicesTitle">Gel</p>
                        <p className="servicesDesc">
                            Onde a cor encontra a eternidade, transformando cada
                            unha em uma obra-prima duradoura.
                        </p>
                    </div>
                    <div className="servicesItems">
                        <img src={descExtension} alt="" />
                        <p className="servicesTitle">Alongamento</p>
                        <p className="servicesDesc">
                            A perfeita harmonia entre força e beleza,
                            construindo o caminho para unhas deslumbrantes e
                            inquebráveis.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
