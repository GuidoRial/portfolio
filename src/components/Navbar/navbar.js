import "./Navbar.css";
import { flagStyle } from "../../aux";
import i18next, { t } from "i18next";
import { Link } from "react-scroll";


function Navbar() {
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
                        className="nav-bar-lists swipeLanguageFlag"
                        onClick={() => toggleLanguage()}
                    >
                        {i18next.language === "en" ? (
                            <img
                                className="swipeLanguageFlag"
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
                                }
                                alt={"country-flag"}
                                style={flagStyle}
                            />
                        ) : (
                            <img
                                className="swipeLanguageFlag"
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
                                }
                                alt={"country-flag"}
                                style={flagStyle}
                            />
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
