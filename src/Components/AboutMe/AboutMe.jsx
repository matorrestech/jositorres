import React from "react"
import "./AboutMe.css"

import jositorres from "../../assets/jositorres-about-me.webp"

export default function AboutMe() {
    return (
        <>
            <section className="aboutMe" id="aboutMe">
                <h1>Sobre Mim</h1>
                <div className="container">
                    <div className="photo">
                        <img src={jositorres} />
                    </div>
                    <div className="text">
                        <p>
                            Olá, sou <span>Josi Torres</span>,
                        </p>
                        <p>
                            Manicure, pedicure e Nail Designer na Inglaterra,
                            minha história com as unhas começou muito cedo, aos
                            17 anos, quando observava minha mãe trabalhando como
                            manicure. Seus ensinamentos foram passados para mim,
                            e minha paixão por unhas despertou. Com minha
                            mudança para a Inglaterra, enxerguei a oportunidade
                            de transformar meu amor e talento pelas unhas em um
                            negócio. Fazer unhas é uma forma de promover
                            autoestima e autocuidado entre as mulheres,
                            valorizando a arte como expressão de individualidade
                            de cada uma. Hoje, equilibro minha correria e
                            dedicação à minha família entre os atendimentos no
                            meu estúdio e cursos que inspiram e educam por meio
                            da arte de fazer unhas.
                        </p>
                        <p>
                            Descubra a união da arte e amor em cada detalhe
                            comigo.
                        </p>
                        <div className="socialMedia">
                            <a
                                href="https://instagram.com/jositorresnaildesigner"
                                target="_blank"
                            >
                                <i className="mdi mdi-instagram"></i>
                                <span className="instagram">
                                    @jositorresnaildesigner
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
