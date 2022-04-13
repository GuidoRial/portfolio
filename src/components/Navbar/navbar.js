import React, { useState } from "react";
import "./Navbar.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { flagStyle } from "../../aux";
import i18next from "i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-scroll";

function Navbar({ t, sidebar, setSidebar, showSidebar }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const selectSpanish = () => {
        i18next.changeLanguage("es");
        setAnchorEl(null);
    };

    const selectEnglish = () => {
        i18next.changeLanguage("en");
        setAnchorEl(null);
    };

    const matches = useMediaQuery("(min-width:850px)");

    const toggleLanguage = () => {
        i18next.language === "en"
            ? i18next.changeLanguage("es")
            : i18next.changeLanguage("en");
    };

    return (
        <nav className="nav-bar">
            <Link
                style={{ color: "white" }}
                to="hero"
                smooth={true}
                duration={1500}
            >
                <h2 className="home">{t("Home")}</h2>
            </Link>
            {matches ? (
                <div>
                    <ul className="link-container">
                        <Link
                            style={{ color: "white" }}
                            to="about"
                            smooth={true}
                            duration={1500}
                        >
                            <li className="nav-bar-lists">{t("About")}</li>
                        </Link>
                        <Link
                            style={{ color: "white" }}
                            to="skills"
                            smooth={true}
                            duration={1500}
                        >
                            <li className="nav-bar-lists">{t("Skills")}</li>
                        </Link>
                        <Link
                            style={{ color: "white" }}
                            to="projects"
                            smooth={true}
                            duration={1500}
                        >
                            <li className="nav-bar-lists">{t("Projects")}</li>
                        </Link>
                        <Link
                            style={{ color: "white" }}
                            to="contact"
                            smooth={true}
                            duration={1500}
                        >
                            <li className="nav-bar-lists">{t("Contact")}</li>
                        </Link>
                        <li
                            className="nav-bar-lists"
                            onClick={() => toggleLanguage()}
                        >
                            {t("Change_language")}
                        </li>
                    </ul>
                </div>
            ) : (
                <i className="fas fa-bars" onClick={showSidebar} />
            )}
        </nav>
    );
}

export default Navbar;
