import React from "react";
import "./Skills.css";
import {
    SiCss3,
    SiFirebase,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";
import { iconStyle } from "../../aux";
import { t } from "i18next";

function Skills() {
    return (
        <section className="skills-container" id="skills">
            <h2 className="skills-title">{t("Skills")}</h2>
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
                    <SiMongodb style={iconStyle} />
                    <p>MongoDB</p>
                </div>
                <div className="skill">
                    <SiExpress style={iconStyle} />
                    <p>Express</p>
                </div>
                <div className="skill">
                    <SiReact style={iconStyle} />
                    <p>React</p>
                </div>
                <div className="skill">
                    <SiNodedotjs style={iconStyle} />
                    <p>NodeJS</p>
                </div>
                <div className="skill">
                    <SiFirebase style={iconStyle} />
                    <p>Firebase</p>
                </div>
                <div className="skill">
                    <SiGit style={iconStyle} />
                    <p>Git</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
