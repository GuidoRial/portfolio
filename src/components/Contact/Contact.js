import React, { useState, useEffect } from "react";
import { clearAllInputs } from "../../utils";
import "./Contact.css";
import Alert from "@mui/material/Alert";

import Aos from "aos";
import "aos/dist/aos.css";
import { t } from "i18next";
import emailjs from "emailjs-com";

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [messageReceived, setMessageReceived] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

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
                    placeholder={t("Name_placeholder")}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="contact-input"
                    type="email"
                    placeholder={t("Email_placeholder")}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    id="messageInput"
                    className="contact-input"
                    type="text"
                    placeholder={t("Message_placeholder")}
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
            </form>
        </section>
    );
}

export default Contact;
