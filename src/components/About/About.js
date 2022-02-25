import { t } from "i18next";
import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2>{t("About_me")}</h2>
                <p>{t("Love_learning")}</p>
                <p>{t("Create_things")}</p>
                <p>{t("Lifelong_learning")}</p>
            </div>
        </section>
    );
}

export default About;
