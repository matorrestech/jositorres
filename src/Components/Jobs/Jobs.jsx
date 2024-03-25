import React, { useRef, useState } from "react"
import "./Jobs.css"

// SWIPER ----------------------------------------
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css"
import "swiper/css/navigation"

// ARTISTIC IMAGES ------------------------------------------
import artistic01 from "../../assets/artistic/artistic01.webp"
import artistic02 from "../../assets/artistic/artistic02.webp"
import artistic03 from "../../assets/artistic/artistic03.webp"
import artistic04 from "../../assets/artistic/artistic04.webp"
import artistic05 from "../../assets/artistic/artistic05.webp"
import artistic06 from "../../assets/artistic/artistic06.webp"

const imgArtistic = [
    artistic01,
    artistic02,
    artistic03,
    artistic04,
    artistic05,
    artistic06,
]

// POLISH IMAGES ------------------------------------------
import polish01 from "../../assets/polish/polish01.webp"
import polish02 from "../../assets/polish/polish02.webp"
import polish03 from "../../assets/polish/polish03.webp"
import polish04 from "../../assets/polish/polish04.webp"
import polish05 from "../../assets/polish/polish05.webp"
import polish06 from "../../assets/polish/polish06.webp"

const imgPolish = [polish01, polish02, polish03, polish04, polish05, polish06]

// EXTENSION IMAGES ------------------------------------------
import extension01 from "../../assets/extension/extension01.webp"
import extension02 from "../../assets/extension/extension02.webp"
import extension03 from "../../assets/extension/extension03.webp"
import extension04 from "../../assets/extension/extension04.webp"
import extension05 from "../../assets/extension/extension05.webp"
import extension06 from "../../assets/extension/extension06.webp"

const imgExtension = [
    extension01,
    extension02,
    extension03,
    extension04,
    extension05,
    extension06,
]

const imgAll = [].concat(imgArtistic, imgPolish, imgExtension)

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

export default function Jobs() {
    return (
        <>
            <section className="jobs">
                <h3>Trabalhos em Destaque</h3>
                <Tabs
                    defaultActiveKey="all"
                    id="justify-tab-example"
                    className="custom-tabs "
                    justify
                >
                    {/*  TAB => ALL/TODOS ---------------------------------- */}
                    <Tab className="all" eventKey="all" title="Todos">
                        <div className="tabs">
                            <Swiper
                                modules={[Pagination, Navigation]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                className="mySwiper"
                                slidesPerView={3}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    1178: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1474: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {imgAll.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiperSlide">
                                            <img
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Tab>

                    {/*  TAB => ARTISTIC/ARTÍSTICO -------------------------- */}
                    <Tab
                        className="artistic"
                        eventKey="artistic"
                        title="Artístico"
                    >
                        <div className="tabs">
                            <Swiper
                                modules={[Pagination, Navigation]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                className="mySwiper"
                                slidesPerView={3}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    1178: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1474: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {imgArtistic.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiperSlide">
                                            <img
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Tab>

                    {/*  TAB => POLISH/GEL ---------------------------------- */}
                    <Tab className="polish" eventKey="polish" title="Gel">
                        <div className="tabs">
                            <Swiper
                                modules={[Pagination, Navigation]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                className="mySwiper"
                                slidesPerView={3}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    1178: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1474: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {imgPolish.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiperSlide">
                                            <img
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Tab>

                    {/*  TAB => EXTENSION/ALONGAMENTO ----------------------- */}
                    <Tab
                        className="extension"
                        eventKey="extension"
                        title="Alongamento"
                    >
                        <div className="tabs">
                            <Swiper
                                modules={[Pagination, Navigation]}
                                pagination={{ clickable: true }}
                                navigation={true}
                                className="mySwiper"
                                slidesPerView={3}
                                spaceBetween={30}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    1178: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1474: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {imgExtension.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiperSlide">
                                            <img
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}
