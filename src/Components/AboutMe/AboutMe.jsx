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
                            Nail Designer brasileira na Inglaterra, onde misturo
                            minha paixão por unhas artísticas e o amor pela
                            minha família em cada design único que crio.
                            Especializada em destacar a personalidade e a beleza
                            natural através da manicure natural, esmaltação em
                            gel, alongamento e unhas artísticas, minha jornada
                            começou no Brasil. Agora, na Inglaterra, levo a
                            alegria brasileira ao Nail Design, equilibrando
                            carreira e dedicação familiar. Ofereço tratamentos
                            que refletem este equilíbrio, além de cursos que
                            inspiram e educam, promovendo a arte nas unhas como
                            expressão de individualidade e paixão.
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
