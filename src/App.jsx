import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

import "@mdi/font/css/materialdesignicons.css"

import Header from "./Components/Header/Header"
import Start from "./Components/Start/Start"
import Services from "./Components/Services/Services"
import Jobs from "./Components/Jobs/Jobs"

function App() {
    return (
        <div>
            <Header />
            <Start />
            <div className="screenHeight">
                <Services />
                <Jobs />
            </div>
        </div>
    )
}

export default App
