import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/navbar";
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
                    t={t}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                    showSidebar={showSidebar}
                />
            )}
            <Hero t={t} />
            <About />
            <Skills />
        </div>
    );
}

export default App;
