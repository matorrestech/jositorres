import React from "react"
import "./Contacts.css"

export default function Contacts() {
    return (
        <section className="contact" id="contact">
            <h1 className="title">Contato</h1>
            <div className="container">
                <div className="contactInfo">
                    <h4>Josi Torres</h4>
                    <span>
                        Nail Designer
                        <br />
                    </span>
                    <div className="linkItems">
                        <a
                            href="https://instagram.com/jositorresnaildesigner"
                            target="_blank"
                        >
                            <i className="mdi mdi-instagram"></i>
                        </a>
                        <a href="http://wa.me/4407399083306" target="_blank">
                            <i className="mdi mdi-whatsapp"></i>
                        </a>
                        <a href="mailto:josiazevedotorres@gmail.com">
                            <i className="mdi mdi-email-heart-outline"></i>
                        </a>
                    </div>
                    <p>
                        2, Upper Terrace Road
                        <br />
                        Flat 3
                        <br />
                        Bournemouth
                        <br />
                        BH2 5NW
                    </p>
                </div>

                <div className="form">
                    <form
                        id="myForm"
                        className="form"
                        action="https://api.staticforms.xyz/submit"
                        method="post"
                    >
                        <input
                            type="hidden"
                            name="accessKey"
                            value="41a8d97a-3805-41a2-9739-00e549aaa7e2"
                        ></input>
                        <input
                            name="name"
                            className="input"
                            type="text"
                            placeholder="Digite seu nome"
                        />

                        <input
                            name="email"
                            className="input"
                            type="email"
                            placeholder="Digite seu email"
                        />

                        <textarea
                            name="message"
                            className="textarea"
                            placeholder="Digite sua mensagem..."
                        />

                        <input
                            className="button"
                            type="submit"
                            value="Enviar"
                        />
                        <input
                            type="hidden"
                            name="redirectTo"
                            value="https://jositorres.com/#contact"
                        ></input>
                    </form>
                </div>
            </div>
        </section>
    )
}
