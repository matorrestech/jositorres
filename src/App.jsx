import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

import "@mdi/font/css/materialdesignicons.css"

import Header from "./Components/Header/Header"
import Start from "./Components/Start/Start"
import Services from "./Components/Services/Services"
import Jobs from "./Components/Jobs/Jobs"
import AboutMe from "./Components/AboutMe/AboutMe"
import Contacts from "./Components/Contacts/Contacts"
import Footer from "./Components/Footer/Footer"

function App() {
    return (
        <div>
            <Header />
            <Start />
            <Services />
            <Jobs />
            <AboutMe />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App
