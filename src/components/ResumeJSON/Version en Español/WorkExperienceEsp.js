import React from "react";

function WorkExperienceEsp() {
    return (
        <>
            <p className="first-level light-blue">
                "<span className="blue">experiencia_laboral</span>":{" "}
                <span className="pink">{"["}</span>
            </p>
            <p className="second-level light-blue">{"{"}</p>
            <p className="third-level light-blue">
                "<span className="cyan">lugar</span>": "
                <span className="green">
                    Multiples efectores de salud, Rosario
                </span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">posición</span>": "
                <span className="green">Practicante de Kinesiología</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">desde</span>": "
                <span className="orange">2019</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">hasta</span>": "
                <span className="orange">2022</span>
                ",
            </p>
            <p className="third-level light-blue">
                "<span className="cyan">descripción</span>": "
                <span className="green">
                    Trabajé en equipo con diferentes profesionales de la salud
                    para asegurar una terapia interdisciplinaria para todos los
                    pacientes. Analicé y evalué la marcha y postura de más de
                    100 pacientes para obtener información sobre el origen de
                    diferentes tipos de alteraciones biomecánicas. Organicé y
                    guié terapias grupales de kinesiología para más de 15
                    pacientes por grupo en un hospital psiquiátrico. Se creó un
                    entorno seguro para que éstos pacientes puedan trabajar en
                    equipo y formar vínculos entre sí.
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

export default WorkExperienceEsp;
