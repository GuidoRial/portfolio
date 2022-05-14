import React, { useEffect, useState } from "react";

import { t } from "i18next";
import "./Projects.css";
import i18n from "i18next";
import uniqid from "uniqid";
import { englishProjectsList } from "./englishProjectsList";
import { spanishProjectsList } from "./spanishProjectsLists";
import Aos from "aos";
import "aos/dist/aos.css";
import Project from "./Project";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        i18n.language === "en"
            ? setProjects(englishProjectsList)
            : setProjects(spanishProjectsList);
    }, [i18n.language]);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section className="projects-container" id="projects">
            <h2 className="projects-title">{t("Projects")}</h2>
            <div className="projects">
                {projects.map((project) => (
                    <Project key={uniqid()} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
