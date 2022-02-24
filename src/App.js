import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/Sidebar";

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
        </div>
    );
}

export default App;
