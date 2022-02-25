import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";
import Skills from "./components/Skills/Skills";

function App() {
    const { t } = useTranslation();
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div className="App">
            <Navbar
                t={t}
                sidebar={sidebar}
                setSidebar={setSidebar}
                showSidebar={showSidebar}
            />
            {sidebar && (
                <Sidebar
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                    showSidebar={showSidebar}
                />
            )}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
