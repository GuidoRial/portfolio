import React from "react";
import ContactInfoEsp from "./Version en Español/ContactInfoEsp";
import MySkillsEsp from "./Version en Español/MySkillsEsp";
import WhatIDoEsp from "./Version en Español/WhatIDoEsp";
import ProjectsEsp from "./Version en Español/ProjectsEsp";
import WorkExperienceEsp from "./Version en Español/WorkExperienceEsp";
import EducationEsp from "./Version en Español/EducationEsp";

function SpanishResume() {
    return (
        <div className="resume">
            <p className="yellow">{"{"}</p>
            <ContactInfoEsp />
            <WhatIDoEsp />
            <MySkillsEsp />
            <ProjectsEsp />
            <WorkExperienceEsp />
            <EducationEsp />
            <p className="yellow">{"}"}</p>
        </div>
    );
}

export default SpanishResume;
