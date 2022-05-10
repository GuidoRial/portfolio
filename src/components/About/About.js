import { t } from "i18next";
import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="about-title">{t("About_me")}</h2>
                <p className="about-paragraph">{t("Love_learning")}</p>
                <p className="about-paragraph">{t("Create_things")}</p>
                <p className="about-paragraph">{t("Lifelong_learning")}</p>
            </div>
        </section>
    );
}

export default About;
