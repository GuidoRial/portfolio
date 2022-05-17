import React from "react";

function WorkExperienceEng() {
    return (
        <>
            <p className="first-level light-blue">
                "<span className="blue">work_experience</span>":{" "}
                <span className="pink">{"["}</span>
            </p>
            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">place</span>": "
                <span className="green">
                    Multiple health facilities, Rosario
                </span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">position</span>": "
                <span className="green">Intern of Physical Therapy</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">from</span>": "
                <span className="orange">2019</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">to</span>": "
                <span className="orange">2022</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">job_description</span>": "
                <span className="green">
                    Collaborated with different health care physicians to ensure
                    an interdisciplinary approach on each and every patient.
                    Analyzed an assessed gait and posture of over 100 patients
                    to gain insight over the origins of different types of
                    biomechanical anomalies. Organized and guided group sessions
                    of physical therapy with over 15 people per group in a
                    psychiatric hospital. Provided a safe space for patients to
                    work together, build morale as well as relationships.
                </span>
                "
            </p>
            <p className="second-level light-blue">{"}"}</p>
            <p className="first-level light-blue">
                <span className="pink">{"]"}</span>,
            </p>
        </>
    );
}

export default WorkExperienceEng;
