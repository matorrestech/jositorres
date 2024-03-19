import React from "react"
import "./Header.css"

export default function Header() {
    return (
        <>
            {/* ---------- NAVIBAR DESKTOP */}
            <div className="desktop">
                <nav className="navDesktop">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Trabalhos</a>
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
                            <a href="#">
                                <i className="mdi mdi-home-heart"></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi mdi-heart"></i>Trabalhos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-account-heart"></i>Sobre
                                mim
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
        </>
    )
}
