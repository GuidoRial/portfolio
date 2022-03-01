import React, { useState, useEffect } from "react";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { clearAllInputs, flagStyle, iconStyle } from "../../aux";
import "./Contact.css";
import Alert from "@mui/material/Alert";

import Aos from "aos";
import "aos/dist/aos.css";
import { t } from "i18next";
import emailjs from "emailjs-com";

function Contact() {
    const [showCopiedToClipboard, setShowCopiedToClipBoard] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [messageReceived, setMessageReceived] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText("rialguido@gmail.com");
        setShowCopiedToClipBoard(true);
        setTimeout(() => {
            setShowCopiedToClipBoard(false);
        }, 3000);
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleDownloadFile = () => {
        setDisableButton(true);
        setTimeout(() => {
            setDisableButton(false);
        }, 5000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send(
            "service_iyar8pc",
            "template_hd42dir",
            { email: email, message: message, name: name },
            "user_poa1hzV8iA6rqjK5nb10N"
        );
        setEmail("");
        setMessage("");
        setName("");
        clearAllInputs();
        setMessageReceived(true);
        setTimeout(() => {
            setMessageReceived(false);
        }, 7000);
    };

    const isInvalid =
        email === "" || message === "" || name === "" || !email.includes("@");

    return (
        <section className="contact" id="contact">
            <div className="contact-left">
                <h2>{t("Contact")}</h2>
                <h3>{t("Find_me")}</h3>
                <div className="contact-skills-container">
                    <div
                        className="skill"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/guido-rial-275552221/",
                                "_blank"
                            )
                        }
                    >
                        <SiLinkedin style={iconStyle} />
                        <p>Linkedin</p>
                    </div>
                    <div
                        className="skill"
                        onClick={() =>
                            window.open(
                                "https://github.com/GuidoRial",
                                "_blank"
                            )
                        }
                    >
                        <SiGithub style={iconStyle} />
                        <p>Github</p>
                    </div>
                    <div className="skill" onClick={handleCopyToClipboard}>
                        <SiGmail style={iconStyle} />
                        <p>e-mail</p>
                    </div>
                </div>
                {showCopiedToClipboard && (
                    <Alert
                        severity="success"
                        data-aos="fade-left"
                        icon={false}
                        sx={{ color: "#141414", backgroundColor: "#d3bdff" }}
                    >
                        {t("Email_Downloaded")}
                    </Alert>
                )}
                <h3>{t("Download")}</h3>
                {disableButton && (
                    <Alert
                        severity="success"
                        data-aos="fade-right"
                        icon={false}
                        sx={{ color: "#141414", backgroundColor: "#d3bdff" }}
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
                            alt={"country-flag"}
                            style={flagStyle}
                        />

                        <a
                            href={require("../../assets/CVs/Guido-Rials-CV.pdf")}
                            download="Guido-Rials-CV.pdf"
                            alt="download-cv"
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
                            alt={"country-flag"}
                            style={flagStyle}
                        />
                        <a
                            href={require("../../assets/CVs/CV-de-Guido-Rial.pdf")}
                            download="CV-de-Guido-Rial.pdf"
                            alt="download-cv"
                            style={
                                disableButton ? { pointerEvents: "none" } : null
                            }
                        >
                            CV en español
                        </a>
                    </button>
                </div>
            </div>
            <div>
                <h3>{t("Or_Send_Email")}</h3>
                {messageReceived && (
                    <Alert
                        severity="success"
                        data-aos="fade-right"
                        icon={false}
                        sx={{ color: "#141414", backgroundColor: "#d3bdff" }}
                    >
                        {t("Email_Sent")}
                    </Alert>
                )}
                <form className="contact-form" onSubmit={sendEmail}>
                    <input
                        className="contact-input"
                        type="name"
                        name="name"
                        placeholder="Your name..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="contact-input"
                        type="email"
                        name="email"
                        placeholder="Your email..."
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="contact-input"
                        type="text"
                        name="message"
                        placeholder="Your message..."
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="submit-button-container">
                        <button
                            disabled={messageReceived}
                            type="submit"
                            className="project-button contact-submit"
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                            disabled={isInvalid}
                            style={{
                                opacity:
                                    isInvalid || messageReceived ? "0.5" : "1",
                            }}
                        >
                            {t("Get_In_Touch")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
