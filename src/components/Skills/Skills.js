import React from "react";
import "./Skills.css";
import {
    SiCss3,
    SiFirebase,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiJest,
    SiReact,
    SiWebpack,
} from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { iconStyle } from "../../aux";
import { t } from "i18next";

function Skills() {
    return (
        <section className="skills-container">
            <h2>{t("Skills")}</h2>
            <div className="skills">
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
                <div className="skill">
                    <SiGit style={iconStyle} />
                    <p>Git</p>
                </div>
                <div className="skill">
                    <SiWebpack style={iconStyle} />
                    <p>Webpack</p>
                </div>
                <div className="skill">
                    <FaNpm style={iconStyle} />
                    <p>npm</p>
                </div>
                <div className="skill">
                    <SiJest style={iconStyle} />
                    <p>Jest</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
