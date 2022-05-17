import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CoolResume from "./components/ResumeJSON/JSONResume";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation();
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <Hero />
                                <About />
                                <Skills />
                                <Projects />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/resume.json" element={<CoolResume />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
