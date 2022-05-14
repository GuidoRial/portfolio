import React, { useState } from "react";
import ProjectTech from "./ProjectTech";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import uniqid from "uniqid";

function Project({ project }) {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleCarousel = (operation) => {
        if (operation === "next") {
            if (carouselIndex + 1 > project.pictures.length - 1) {
                setCarouselIndex(0);
            } else {
                setCarouselIndex(carouselIndex + 1);
            }
        } else {
            if (carouselIndex - 1 < 0) {
                setCarouselIndex(project.pictures.length - 1);
            } else {
                setCarouselIndex(carouselIndex - 1);
            }
        }
    };

    return (
        <div key={uniqid()} className="project" data-aos="fade-up">
            <div className="carousel">
                <img
                    src={project?.pictures[carouselIndex]}
                    alt={project.name}
                    className="project-image"
                />
                {project?.pictures?.length > 1 ? (
                    <div className="carousel-buttons-container">
                        <button
                            className="carousel-button"
                            onClick={() => handleCarousel("prev")}
                        >
                            <MdNavigateBefore />
                        </button>
                        <button
                            className="carousel-button"
                            onClick={() => handleCarousel("next")}
                        >
                            <MdNavigateNext />
                        </button>
                    </div>
                ) : null}
            </div>

            <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-icons-container">
                    {project.technologies.map((tech) => (
                        <ProjectTech key={uniqid()} tech={tech} />
                    ))}
                </div>

                <div className="project-icons-container"></div>
                <div className="project-button-container">
                    <button
                        className="project-button"
                        onClick={() =>
                            window.open(project.livePreview, "_blank")
                        }
                    >
                        Live Preview
                    </button>
                    <button
                        className="project-button"
                        onClick={() =>
                            window.open(project.codeSource, "_blank")
                        }
                    >
                        Code Source
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;
