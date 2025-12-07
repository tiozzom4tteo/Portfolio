import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/Aboutme";
import { Footer } from "./components/Footer";
import { Work } from "./components/Work";
import CookieConsent from "./components/Cookie";
import { CV } from "./components/CV";
import { Instruction } from "./components/Instruction";
import {Certifications} from "./components/Certifications";
import {Experience} from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Work />
      <Experience />
      <Instruction />
      <AboutMe />
      <Certifications />
      <CV />
      <Footer />
      <CookieConsent />
    </div>
  );
}
export default App;
