import React, { useEffect, useState } from "react";
import PokeScreenShot from "../../assets/poke-game.png";
import TodoScreenShot from "../../assets/todo-list.png";
import InstaClone from "../../assets/InstaClone.png";
import { t } from "i18next";
import "./Projects.css";
import { iconStyle } from "../../aux";
import { SiFirebase } from "react-icons/si";

import i18n from "i18next";
import { englishProjectsList } from "./englishProjectsList";
import { spanishProjectsList } from "./spanishProjectsLists";
import FrontEndTech from "./FrontEndTech";

import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
    const [projects, setProjects] = useState([]);
    console.log(i18n.language);
    useEffect(() => {
        i18n.language === "en"
            ? setProjects(englishProjectsList)
            : setProjects(spanishProjectsList);
    }, [i18n.language]);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section className="projects-container">
            <h2>{t("Projects")}</h2>
            <div className="projects">
                {projects.map((project) => (
                    <div className="project" key={project.name} data-aos="fade-up" >
                        <img
                            src={project.picture}
                            alt={project.name}
                            className="project-image"
                        />
                        <div className="project-info">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <div className="project-icons-container">
                                <>
                                    {project.technologies.length > 4 ? (
                                        <>
                                            <FrontEndTech />
                                            <div className="skill">
                                                <SiFirebase style={iconStyle} />
                                                <p>Firebase</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <FrontEndTech />
                                        </>
                                    )}
                                </>
                            </div>
                            <div className="project-button-container">
                                <button
                                    className="project-button"
                                    onClick={() =>
                                        window.open(
                                            project.livePreview,
                                            "_blank"
                                        )
                                    }
                                >
                                    Live Preview
                                </button>
                                <button
                                    className="project-button"
                                    onClick={() =>
                                        window.open(
                                            project.codeSource,
                                            "_blank"
                                        )
                                    }
                                >
                                    Code Source
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
