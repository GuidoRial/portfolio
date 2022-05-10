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

    const sendEmail = (e) => {
        e.preventDefault();
        if (isInvalid) {
            alert("Inputs can't be empty");
            return;
        }
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
            <h2 className="contact-title">{t("Contact")}</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <input
                    className="contact-input"
                    type="text"
                    placeholder="YOUR NAME"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="contact-input"
                    type="email"
                    placeholder="YOUR EMAIL"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    id="messageInput"
                    className="contact-input"
                    type="text"
                    placeholder="YOUR MESSAGE"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="form-button"
                    disabled={messageReceived}
                    type="submit"
                    style={{
                        opacity: isInvalid || messageReceived ? "0.5" : "1",
                    }}
                >
                    {t("Get_In_Touch")}
                </button>
                {messageReceived && (
                    <Alert
                        severity="success"
                        data-aos="fade-right"
                        icon={false}
                        sx={{ color: "#141414", backgroundColor: "#ffa818" }}
                    >
                        {t("Email_Sent")}
                    </Alert>
                )}
                {showCopiedToClipboard && (
                    <Alert
                        severity="success"
                        data-aos="fade-left"
                        icon={false}
                        sx={{ color: "#141414", backgroundColor: "#ffa818" }}
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
            </form>
            <div className="contact-icons-container">
                <div
                    className="skill contact-icon"
                    onClick={() =>
                        window.open("https://github.com/GuidoRial", "_blank")
                    }
                >
                    <SiGithub style={iconStyle} />
                </div>
                <div
                    className="skill contact-icon"
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
                    className="skill contact-icon"
                    onClick={handleCopyToClipboard}
                >
                    <SiGmail style={iconStyle} />
                </div>
            </div>

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
                        href={require("../../assets/CVs/Guido-Rial-Resume.pdf")}
                        download="Guido Rial - Resume - Front end web developer.pdf"
                        alt="download resume"
                        style={disableButton ? { pointerEvents: "none" } : null}
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
                        href={require("../../assets/CVs/CV-de-Guido-Rial.pdf")}
                        download="Guido Rial - CV- Desarrollador Web Front End"
                        alt="descargar cv"
                        style={disableButton ? { pointerEvents: "none" } : null}
                    >
                        CV en español
                    </a>
                </button>
            </div>
        </section>
    );
}

export default Contact;
