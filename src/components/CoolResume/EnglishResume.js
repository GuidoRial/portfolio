import React from "react";
import ContactInfoEng from "./EnglishVersion/ContactInfoEng";
import "./CoolResume.css";
import MySkillsEng from "./EnglishVersion/MySkillsEng";
import ProjectsEng from "./EnglishVersion/ProjectsEng";
import WorkExperienceEng from "./EnglishVersion/WorkExperienceEng";
import Education from "./EnglishVersion/Education";
import WhatIDo from "./EnglishVersion/WhatIDoEng";

function EnglishResume() {
    return (
        <div className="resume">
            <p className="yellow">{"{"}</p>
            <ContactInfoEng />
            <WhatIDo />
            <MySkillsEng />
            <ProjectsEng />
            <WorkExperienceEng />
            <Education />
            <p className="yellow">{"}"}</p>
        </div>
    );
}

export default EnglishResume;
