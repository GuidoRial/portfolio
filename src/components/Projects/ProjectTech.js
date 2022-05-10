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
} from "react-icons/si";
import { iconStyle } from "../../aux";
function ProjectTech({ tech }) {
    switch (tech) {
        case "HTML":
            return (
                <div className="skill">
                    <SiHtml5 style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "CSS":
            return (
                <div className="skill">
                    <SiCss3 style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "JavaScript":
            return (
                <div className="skill">
                    <SiJavascript style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "React":
            return (
                <div className="skill">
                    <SiReact style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "MongoDB":
            return (
                <div className="skill">
                    <SiMongodb style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "Express":
            return (
                <div className="skill">
                    <SiExpress style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "NodeJS":
            return (
                <div className="skill">
                    <SiNodedotjs style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        case "Firebase":
            return (
                <div className="skill">
                    <SiFirebase style={iconStyle} />
                    <p>{tech}</p>
                </div>
            );
            break;
        default:
            return (
                <div className="skill">
                    <p>Loading...</p>
                </div>
            );
    }
}

export default ProjectTech;
