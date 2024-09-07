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

function App() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTime, setBlockTime] = useState(0);

  // Funzione per monitorare i reloads
  const checkPageReloads = () => {
    const maxReloads = 5;
    const timeFrame = 10 * 1000; 
    const blockDuration = 900 * 1000; 

    const currentTime = new Date().getTime();
    
    // Recupera i timestamp dei caricamenti della pagina
    let reloadTimestamps = JSON.parse(localStorage.getItem('reloadTimestamps')) || [];

    reloadTimestamps = reloadTimestamps.filter(timestamp => currentTime - timestamp <= timeFrame);

    if (reloadTimestamps.length >= maxReloads) {
      setIsBlocked(true);
      setBlockTime(blockDuration);
      setTimeout(() => {
        setIsBlocked(false); 
        localStorage.removeItem('reloadTimestamps');
      }, blockDuration);
      return;
    }
    // Aggiungi il timestamp attuale
    reloadTimestamps.push(currentTime);
    localStorage.setItem('reloadTimestamps', JSON.stringify(reloadTimestamps));
  };

  useEffect(() => {
    checkPageReloads();
  }, []);

  return (
    <div className="App">
      {isBlocked ? (
        <div className="blocked-overlay">
          <h1>Ooooopss... you seem to have been blocked, please try again later</h1>
        </div>
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Work />
          <AboutMe />
          <Footer />
          <CookieConsent />
        </>
      )}
    </div>
  );
}

export default App;
