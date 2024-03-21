import React, { useState, useEffect } from "react"
import "./Jobs.css"

import Carousel from "react-bootstrap/Carousel"

import descNailArt from "../../assets/nailArt.png"
import descGelPolish from "../../assets/gelPolish.png"
import descExtension from "../../assets/extension.png"

import fleurDeLis from "../../assets/fleurDeLis.png"
import josi from "../../assets/jositorres.png"

export default function Jobs() {
    const [numImages, setNumImages] = useState(3)

    useEffect(() => {
        const updateNumImages = () => {
            setNumImages(window.innerWidth < 768 ? 1 : 3)
        }

        window.addEventListener("resize", updateNumImages)

        // Atualiza o número de imagens quando o componente é montado
        updateNumImages()

        // Remove o ouvinte de eventos quando o componente é desmontado
        return () => {
            window.removeEventListener("resize", updateNumImages)
        }
    }, [])

    const [selectedCategory, setSelectedCategory] = useState("all")

    const handleCategoryClick = (category, event) => {
        event.preventDefault()
        setSelectedCategory(category)
    }

    const nailArt = [fleurDeLis]
    const gelPolish = [josi]
    const extension = [fleurDeLis, josi]

    const jobs = {
        nailArt: nailArt,
        gelPolish: gelPolish,
        extension: extension,
        all: [].concat(nailArt, gelPolish, extension),
    }

    return (
        <>
            <section className="jobs" id="jobs">
                <h1>Trabalhos</h1>
                <div className="descriptionJobs">
                    <div className="descriptionJobsItems">
                        <img src={descNailArt} alt="" />
                        <p className="descriptionJobsTitle">Nail Art</p>
                        <p className="jobsDescription">
                            Não é apenas beleza, é uma forma de arte onde cada
                            pincelada revela um pedaço da sua alma.
                        </p>
                    </div>
                    <div className="descriptionJobsItems">
                        <img src={descGelPolish} alt="" />
                        <p className="descriptionJobsTitle">Gel Polish</p>
                        <p className="jobsDescription">
                            Onde a cor encontra a eternidade, transformando cada
                            unha em uma obra-prima duradoura.
                        </p>
                    </div>
                    <div className="descriptionJobsItems">
                        <img src={descExtension} alt="" />
                        <p className="descriptionJobsTitle">Alongamento</p>
                        <p className="jobsDescription">
                            A perfeita harmonia entre força e beleza,
                            construindo o caminho para unhas deslumbrantes e
                            inquebráveis.
                        </p>
                    </div>
                </div>
                <div className="category">
                    <ul>
                        <li>
                            <button
                                onClick={(event) =>
                                    handleCategoryClick("all", event)
                                }
                            >
                                Todos
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(event) =>
                                    handleCategoryClick("nailArt", event)
                                }
                            >
                                Nail Art
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(event) =>
                                    handleCategoryClick("gelPolish", event)
                                }
                            >
                                Gel
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(event) =>
                                    handleCategoryClick("extension", event)
                                }
                            >
                                Alongamentos
                            </button>
                        </li>
                    </ul>

                    <div className="jobsList">
                        <Carousel>
                            {Array(
                                Math.ceil(
                                    jobs[selectedCategory].length / numImages
                                )
                            )
                                .fill()
                                .map((_, i) => (
                                    <Carousel.Item key={i}>
                                        <div className="d-flex justify-content-around">
                                            {jobs[selectedCategory]
                                                .slice(
                                                    i * numImages,
                                                    (i + 1) * numImages
                                                )
                                                .map((job, index) => (
                                                    <img
                                                        key={index}
                                                        src={job}
                                                        className="d-block"
                                                        alt="..."
                                                    />
                                                ))}
                                        </div>
                                    </Carousel.Item>
                                ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}
