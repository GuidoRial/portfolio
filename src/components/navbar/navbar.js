import React from "react";
import "./navbar.css";

function navbar() {
    return (
        <nav className="nav-bar">
            <h2>HOME</h2>
            <div>
                <ul className="link-container">
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Language</li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;
