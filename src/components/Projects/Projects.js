import React, { useEffect, useState } from "react";
import PokeScreenShot from "../../assets/poke-game.png";
import TodoScreenShot from "../../assets/todo-list.png";
import InstaClone from "../../assets/InstaClone.png";
import { t } from "i18next";
import "./Projects.css";
import { iconStyle } from "../../aux";
import {
    SiCss3,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiReact,
} from "react-icons/si";
import { Button } from "@mui/material";
import i18n from "i18next";
import englishProjectsList from "./englishProjectsList.json";
import spanishProjectsList from "./spanishProjectsLists.json";

//On click, take the link as a parameter and open it in a new tab, create 1 function, send project.livePreview or codeSource as params
// Create a json for each language and load it dynamically according to the current language

function Projects() {
    const [projects, setProjects] = useState([]);
    console.log(i18n.language);
    useEffect(() => {
        i18n.language === "en"
            ? setProjects(englishProjectsList)
            : setProjects(spanishProjectsList);
    }, [i18n.language]);

    return (
        <section className="projects-container">
            <h2>{t("Projects")}</h2>
            <div className="projects">
                <div className="project">
                    <img
                        className="project-image"
                        src={InstaClone}
                        alt="project-screenshot"
                    />
                    <div className="project-info">
                        <h3 className="project-name">Instagram Clone</h3>
                        <p className="project-description">
                            My biggest project yet. It has almost every bit of
                            functionality any social media app should have. It
                            has a demo user so people can login without creating
                            an account (but they can do that, of course). Full
                            list of features can be read on GitHub
                        </p>
                        <div className="project-icons-container">
                            <div className="skill">
                                <SiHtml5 style={iconStyle} />
                                <p>HTML5</p>
                            </div>
                            <div className="skill">
                                <SiCss3 style={iconStyle} />
                                <p>CSS3</p>
                            </div>
                            <div className="skill">
                                <SiJavascript style={iconStyle} />
                                <p>JavaScript</p>
                            </div>
                            <div className="skill">
                                <SiReact style={iconStyle} />
                                <p>React</p>
                            </div>
                            <div className="skill">
                                <SiFirebase style={iconStyle} />
                                <p>Firebase</p>
                            </div>
                        </div>
                        <div className="project-button-container">
                            <button className="project-button">
                                Live Preview
                            </button>
                            <button className="project-button">
                                Code Source
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
