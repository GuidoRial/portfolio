import React from "react";
import {
    SiCss3,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTypescript,
} from "react-icons/si";
import { iconStyle } from "../../utils";
function ProjectTech({ tech }) {
    switch (tech) {
        case "HTML":
            return (
                <div className="skill">
                    <SiHtml5 style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "CSS":
            return (
                <div className="skill">
                    <SiCss3 style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "JavaScript":
            return (
                <div className="skill">
                    <SiJavascript style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "TypeScript":
            return (
                <div className="skill">
                    <SiTypescript style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "React":
            return (
                <div className="skill">
                    <SiReact style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
        case "MongoDB":
            return (
                <div className="skill">
                    <SiMongodb style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "Express":
            return (
                <div className="skill">
                    <SiExpress style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "NodeJS":
            return (
                <div className="skill">
                    <SiNodedotjs style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        case "Firebase":
            return (
                <div className="skill">
                    <SiFirebase style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );

        default:
            return (
                <div className="skill">
                    <p>Loading...</p>
                </div>
            );
    }
}

export default ProjectTech;
