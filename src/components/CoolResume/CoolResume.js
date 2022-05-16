import React, { useEffect, useState } from "react";
import i18n from "i18next";
import "./CoolResume.css";
import EnglishResume from "./EnglishResume";
import SpanishResume from "./SpanishResume";

function CoolResume() {
    const [resume, setResume] = useState("");

    useEffect(() => {
        i18n.language === "en" ? setResume("en") : setResume("es");
    }, [i18n.language]);
    /*
    Play around with margin left to create indentation
    */
    return <div className="cool-resume">{resume === "en" ? <EnglishResume /> : <SpanishResume />}</div>;
}

export default CoolResume;
