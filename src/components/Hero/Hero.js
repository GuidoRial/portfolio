import React from "react";
import "./Hero.css";
import myPhoto from "../../assets/my-photo.jpeg";
import { t } from "i18next";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-who-i-am ">
                <h1 className="my-name">Guido Rial</h1>
                <h2 className="what-i-do">{t("What_I_do")}</h2>
                <p className="statement">{t("Statement")}</p>
            </div>
            <div className="hero-image-container">
                <img className="hero-photo" src={myPhoto} alt="Guido Rial" />
            </div>
        </section>
    );
}

export default Hero;
