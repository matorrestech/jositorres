import React from "react"
import "./Header.css"

export default function Header() {
    return (
        <>
            <header>
                {/* ---------- NAVIBAR DESKTOP */}
                <div className="desktop">
                    <nav className="navDesktop">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#jobs">Trabalhos</a>
                            </li>
                            <li>
                                <a href="#">Sobre mim</a>
                            </li>
                            <li>
                                <a href="#">Contatos</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* ---------- NAVIBAR MOBILE */}
                <div className="mobile">
                    <nav className="navMobile">
                        <ul>
                            <li>
                                <a href="#home">
                                    <i className="mdi mdi-home-heart"></i>Home
                                </a>
                            </li>
                            <li>
                                <a href="#jobs">
                                    <i className="mdi mdi mdi-heart"></i>
                                    Trabalhos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-account-heart"></i>
                                    Sobre mim
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="mdi mdi-notebook-heart"></i>
                                    Contatos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
