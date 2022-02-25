import i18next, { t } from "i18next";
import React from "react";
import { Link } from "react-scroll";
import "./Sidebar.css";

function Sidebar({ sidebar, setSidebar, showSidebar }) {
    const toggleLanguage = () => {
        i18next.language === "en"
            ? i18next.changeLanguage("es")
            : i18next.changeLanguage("en");
        showSidebar();
    };

    return (
        <aside>
            <ul>
                
                <li className="sidebar-lists" onClick={toggleLanguage}>
                    {t("Change_language")}
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
