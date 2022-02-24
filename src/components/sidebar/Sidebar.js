import React from "react";
import "./Sidebar.css";

function Sidebar({ t }) {
    return (
        <aside>
            <ul className="sidebar-link-container">
                <li className="sidebar-lists">{t("About")}</li>
                <li className="sidebar-lists">{t("Skills")}</li>
                <li className="sidebar-lists">{t("Projects")}</li>
                <li className="sidebar-lists">{t("Contact")}</li>
                <li className="sidebar-lists">{t("Change_language")}</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
