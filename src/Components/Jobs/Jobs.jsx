import React from "react"
import "./Jobs.css"

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

export default function Jobs() {
    return (
        <>
            <div>
                <Tabs
                    defaultActiveKey="all"
                    id="justify-tab-example"
                    className="d-flex justify-content-center custom-tabs"
                    justify
                >
                    <Tab eventKey="all" title="Todos">
                        Todos
                    </Tab>
                    <Tab eventKey="artistic" title="Artístico">
                        Artístico
                    </Tab>
                    <Tab eventKey="polish" title="Gel">
                        Gel
                    </Tab>
                    <Tab eventKey="extension" title="Alongamento">
                        Alongamento
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
