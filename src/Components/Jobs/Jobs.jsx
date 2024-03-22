import React from "react"
import "./Jobs.css"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

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
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log("slide change")}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            ...
                        </Swiper>
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
