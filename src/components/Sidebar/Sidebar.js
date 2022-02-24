import i18next, { t } from "i18next";
import React from "react";
import "./Sidebar.css";

function Sidebar({sidebar, setSidebar, showSidebar }) {
    const toggleLanguage = () => {
        i18next.language === "en"
            ? i18next.changeLanguage("es")
            : i18next.changeLanguage("en");
        showSidebar()
    };



    return (
        <aside>
            <ul className="sidebar-link-container">
                <li className="sidebar-lists">{t("About")}</li>
                <li className="sidebar-lists">{t("Skills")}</li>
                <li className="sidebar-lists">{t("Projects")}</li>
                <li className="sidebar-lists">{t("Contact")}</li>
                <li className="sidebar-lists" onClick={toggleLanguage}>
                    {t("Change_language")}
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
