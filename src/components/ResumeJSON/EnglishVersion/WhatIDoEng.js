import React from "react";
import { Link } from "react-router-dom";

function WhatIDo() {
    return (
        <>
            <p className="first-level light-blue">
                "<span className="blue">what_I_do</span>":{" "}
                <span className="pink">{"["}</span>
            </p>
            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">link_to</span>": "
                <span className="green">My Portfolio</span>",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">link</span>": "
                <span className="green link">
                    <Link to="/">https://portfolio-guidorial.vercel.app/</Link>
                </span>
                ",
            </p>
            <p className="second-level light-blue">{"},"}</p>
            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">link_to</span>": "
                <span className="green">GitHub</span>",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">link</span>": "
                <span
                    className="green link"
                    onClick={() =>
                        window.open("https://github.com/GuidoRial", "_blank")
                    }
                >
                    https://github.com/GuidoRial
                </span>
                ",
            </p>
            <p className="second-level light-blue">{"},"}</p>
            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">link_to</span>": "
                <span className="green">LinkedIn</span>",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">link</span>": "
                <span
                    className="green link"
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/guido-rial-275552221/",
                            "_blank"
                        )
                    }
                >
                    linkedin.com/in/guido-rial-275552221/
                </span>
                ",
            </p>
            <p className="second-level light-blue">{"}"}</p>
            <p className="first-level pink">
                {"]"}
                <span className="light blue"> ,</span>
            </p>
        </>
    );
}

export default WhatIDo;
