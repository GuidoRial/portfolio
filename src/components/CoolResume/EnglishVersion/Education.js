import React from "react";

function Education() {
    return (
        <>
            <p className="first-level light-blue">
                "<span className="blue">education</span>":{" "}
                <span className="pink">{"["}</span>
            </p>
            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">where</span>": "
                <span className="green">The Odin Project</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">what</span>": "
                <span className="green">Web Development</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">from</span>": "
                <span className="orange">2021</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">to</span>": "
                <span className="orange">2022</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">completed</span>": "
                <span className="orange">true</span>"
            </p>
            <p className="second-level light-blue">{"},"}</p>

            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">where</span>": "
                <span className="green">Universidad del gran Rosario</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">what</span>": "
                <span className="green">Lic. en Kinesiología y Fisiatría</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">from</span>": "
                <span className="orange">2017</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">to</span>": "
                <span className="orange">2022</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">completed</span>": "
                <span className="orange">false</span>"
            </p>
            <p className="second-level light-blue">{"}"}</p>

            <p className="first-level light-blue">
                <span className="pink">{"]"}</span>
            </p>
        </>
    );
}

export default Education;
