import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/Aboutme";
import { Footer } from "./components/Footer";
import { sendEmail } from "./components/Email";
import { Work } from "./components/Work";
// import { CV } from "./components/CV";
import axios from "axios";

function App() {
  React.useEffect(() => {
    const userAgent = navigator.userAgent;
    axios.get("https://api.ipify.org?format=json").then((response) => {
      const ip = response.data.ip;
      axios.get(`https://ipapi.co/${ip}/json/`).then((response) => {
        const location =
          response.data.city +
          ", " +
          response.data.region +
          ", " +
          response.data.country_name;
        sendEmail(ip, location, userAgent);
      });
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Work />
      <AboutMe />
      {/* <CV /> */}
      <Footer />
    </div>
  );
}

export default App;
