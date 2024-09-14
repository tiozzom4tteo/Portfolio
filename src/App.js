import React, { useEffect, useState } from "react";
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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Work />
      <AboutMe />
      <CV />
      <Footer />
      {/* <CookieConsent /> */}
    </div>
  );
}
export default App;
