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

import fleurdelis from "../../assets/fleurDeLis.png"

const imgArtistic = [
    artistic01,
    artistic02,
    artistic03,
    artistic04,
    artistic05,
    artistic06,
]
const imgPolish = [fleurdelis]
const imgExtension = [fleurdelis]
const imgAll = [].concat(imgArtistic, imgPolish, imgExtension)

import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

export default function Jobs() {
    return (
        <>
            <section className="jobs">
                <h3>Meus últimos designes criados</h3>
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
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1024: {
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
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1024: {
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
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1024: {
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
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    1024: {
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
