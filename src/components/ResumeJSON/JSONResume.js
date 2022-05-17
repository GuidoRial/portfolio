import React, { useEffect, useState } from "react";
import i18n from "i18next";
import "./JSONResume.css";
import EnglishResume from "./EnglishResume";
import SpanishResume from "./SpanishResume";

function JSONResume() {
    const [resume, setResume] = useState("");
    useEffect(() => {
        i18n.language === "en" ? setResume("en") : setResume("es");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    return (
        <div className="cool-resume">
            {resume === "en" ? <EnglishResume /> : <SpanishResume />}
        </div>
    );
}

export default JSONResume;
