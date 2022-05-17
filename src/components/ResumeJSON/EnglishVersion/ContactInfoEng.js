import React from "react";

function ContactInfoEng() {
    return (
        <>
            <p className="first-level light-blue">
                "<span className="blue">contact_info</span>":{" "}
                <span className="pink">{"{"}</span>
            </p>
            <p className="second-level light-blue">
                "<span className="cyan">name</span>": "
                <span className="green">Guido Rial</span>",
            </p>
            <p className="second-level light-blue">
                "<span className="cyan">title</span>": "
                <span className="green">Front end web developer</span>",
            </p>
            <p className="second-level light-blue">
                "<span className="cyan">based_in</span>": "
                <span className="green">Rosario, Argentina</span>",
            </p>
            <p className="second-level light-blue">
                "<span className="cyan">phone_number</span>": "
                <span className="green">+54 341 718-2338</span>",
            </p>
            <p className="second-level light-blue">
                "<span className="cyan">email</span>": "
                <span className="green">rialguido@gmail.com</span>"
            </p>
            <p className="first-level pink">
                {"}"} <span className="light-blue">,</span>
            </p>
        </>
    );
}

export default ContactInfoEng;
