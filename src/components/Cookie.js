import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { sendEmail } from "./Email"; 
import "animate.css";
import axios from "axios";

let ip = null;
let location = null;
let userAgent = null;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 1 });
    setIsVisible(false);

    userAgent = navigator.userAgent;

    axios.get("https://api.ipify.org?format=json").then((response) => {
      ip = response.data.ip;
      axios.get(`https://ipapi.co/${ip}/json/`).then((response) => {
        location =
          response.data.city +
          ", " +
          response.data.region +
          ", " +
          response.data.country_name;

        Cookies.set('user_ip', ip, { expires: 1 });
        Cookies.set('user_location', location, { expires: 1 });
        Cookies.set('user_agent', userAgent, { expires: 1 });

        sendEmail(ip, location, userAgent);
      });
    });
  };

  const declineCookies = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 1 });
    setIsVisible(false);
    ip = "N/A";
    location = "N/A";
    userAgent = "N/A";
    sendEmail(ip, location, userAgent);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>My website uses cookies to enhance your browsing experience and to provide personalized content.</p>
      <button id="acceptCookies" onClick={acceptCookies}>Accept</button>
      <button id="declineCookies" onClick={declineCookies}>Decline</button>
    </div>
  );
};

export default CookieConsent;
