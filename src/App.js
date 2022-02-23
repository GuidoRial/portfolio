import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/navbar/navbar";



function App() {
    const { t } = useTranslation();

    return (
        <div className="App">
            <Navbar t={t} />
        </div>
    );
}

export default App;
