import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/Aboutme";
import { Footer } from "./components/Footer";
import { sendEmail } from "./components/Email";
import axios from "axios";

function App() {
  React.useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ip = response.data.ip;
        sendEmail(ip);
      })
      .catch((error) => {
        console.log("Errore nel recupero dell'IP:", error);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
