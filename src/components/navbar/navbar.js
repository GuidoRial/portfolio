import React, { useState } from "react";
import "./Navbar.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { flagStyle } from "../../aux";
import i18next from "i18next";

function Navbar({ t }) {

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

    return (
        <nav className="nav-bar">
            <h2>{t("Home")}</h2>
            <div>
                <ul className="link-container">
                    <li className="nav-bar-lists">{t("About")}</li>
                    <li className="nav-bar-lists">{t("Skills")}</li>
                    <li className="nav-bar-lists">{t("Projects")}</li>
                    <li className="nav-bar-lists">{t("Contact")}</li>
                    <i
                        className="fas fa-globe"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => selectEnglish()}>
                            <img
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
                                }
                                alt={"country-flag"}
                                style={flagStyle}
                            />
                            English
                        </MenuItem>
                        <MenuItem onClick={() => selectSpanish()}>
                            <img
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
                                }
                                alt={"country-flag"}
                                style={flagStyle}
                            />
                            Español
                        </MenuItem>
                    </Menu>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
