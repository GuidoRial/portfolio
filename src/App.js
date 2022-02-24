import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";

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
        </div>
    );
}

export default App;
