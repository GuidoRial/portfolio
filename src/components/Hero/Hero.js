import React, { useEffect } from "react";
import "./Hero.css";
import myPhoto from "../../assets/my-photo.jpeg";
import { t } from "i18next";

import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <section className="hero">
            <div className="hero-who-i-am " data-aos="fade-right">
                <h1 className="my-name">Guido Rial</h1>
                <h2 className="what-i-do">{t("What_I_do")}</h2>
                <p className="statement">{t("Statement")}</p>
            </div>
            <div className="hero-image-container" data-aos="fade-left">
                <img className="hero-photo" src={myPhoto} alt="Guido Rial" />
            </div>
        </section>
    );
}

export default Hero;
