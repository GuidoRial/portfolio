import React, { useEffect, useState } from "react";
import "./Hero.css";
import myPhoto from "../../assets/my-photo.jpeg";
import { t } from "i18next";

import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { flagStyle, iconStyle } from "../../utils";

import Aos from "aos";
import "aos/dist/aos.css";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";

function Hero() {
    const [showCopiedToClipboard, setShowCopiedToClipBoard] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const handleCopyToClipboard = () => {
        setShowCopiedToClipBoard(true);
        setTimeout(() => {
            setShowCopiedToClipBoard(false);
        }, 7000);
        navigator.clipboard.writeText("rialguido@gmail.com");
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleDownloadFile = () => {
        setDisableButton(true);
        setTimeout(() => {
            setDisableButton(false);
        }, 7000);
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <section className="hero" id="hero">
            <div className="hero-who-i-am " data-aos="fade-right">
                <h1 className="my-name">Guido Rial</h1>
                <h2 className="what-i-do">{t("What_I_do")}</h2>
                <p className="statement">{t("Statement")}</p>
                <div className="contact-icons-container">
                    <div
                        className="contact-icon"
                        onClick={() =>
                            window.open(
                                "https://github.com/GuidoRial",
                                "_blank"
                            )
                        }
                    >
                        <SiGithub style={iconStyle} />
                    </div>
                    <div
                        className="contact-icon"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/guido-rial-275552221/",
                                "_blank"
                            )
                        }
                    >
                        <SiLinkedin style={iconStyle} />
                    </div>
                    <div
                        id="emailIcon"
                        className="contact-icon"
                        onClick={handleCopyToClipboard}
                    >
                        <SiGmail style={iconStyle} />
                    </div>
                </div>
                {showCopiedToClipboard && (
                    <Alert
                        severity="success"
                        data-aos="fade-left"
                        icon={false}
                        sx={{
                            color: "#141414",
                            backgroundColor: "#ffa818",
                        }}
                    >
                        {t("Email_Downloaded")}
                    </Alert>
                )}
                {disableButton && (
                    <Alert
                        severity="success"
                        data-aos="fade-right"
                        icon={false}
                        sx={{ color: "#141414", backgroundColor: "#ffa818" }}
                    >
                        {t("Downloaded")}
                    </Alert>
                )}
                <div className="contact-button-container">
                    <button
                        style={{ opacity: disableButton ? "0.5" : "1" }}
                        disabled={disableButton}
                        className="project-button contact-button"
                        onClick={handleDownloadFile}
                    >
                        <img
                            src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
                            }
                            alt="country flag"
                            style={flagStyle}
                        />

                        <a
                            href={require("../../assets/CVs/Guido-Rial-Resume-Front-end-web-developer .pdf")}
                            download="Guido Rial - Resume - Front end web developer.pdf"
                            alt="download resume"
                            style={
                                disableButton ? { pointerEvents: "none" } : null
                            }
                        >
                            English Resume
                        </a>
                    </button>
                    <button
                        style={{ opacity: disableButton ? "0.5" : "1" }}
                        disabled={disableButton}
                        className="project-button contact-button"
                        onClick={handleDownloadFile}
                    >
                        <img
                            src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
                            }
                            alt="country flag"
                            style={flagStyle}
                        />
                        <a
                            href={require("../../assets/CVs/Guido-Rial-CV-Desarrollador-Web-Front-End.pdf")}
                            download="Guido Rial - CV- Desarrollador Web Front End"
                            alt="descargar cv"
                            style={
                                disableButton ? { pointerEvents: "none" } : null
                            }
                        >
                            CV en español
                        </a>
                    </button>
                    <button
                        className="project-button contact-button"
                        id="coolResumeButton"
                    >
                        <Link to="cool-resume">{t("Click_me")}</Link>
                    </button>
                </div>
            </div>
            <div className="hero-image-container" data-aos="fade-left">
                <img className="hero-photo" src={myPhoto} alt="Guido Rial" />
            </div>
        </section>
    );
}

export default Hero;
