import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import profilePhoto from "../assets/img/profilePhoto.jpg";
import ski from "../assets/img/ski.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css"

const photos = [
  { image: profilePhoto, name: "Unox S.p.A. Hackathon" },
  { image: ski, name: "Skiing in the Dolomites" }
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalTime = 5000; // Tempo tra le transizioni
  const totalPhotos = photos.length;

  let startX = 0; // Coordinate iniziali del tocco
  let endX = 0; // Coordinate finali del tocco

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Passa al prossimo slide
    }, intervalTime);

    return () => clearInterval(interval); // Pulisce l'intervallo
  }, []);

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX; // Registra il punto di partenza
  };

  const handleTouchMove = (e) => {
    endX = e.touches[0].clientX; // Aggiorna il punto attuale durante il movimento
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      // Swipe verso sinistra
      nextSlide();
    } else if (endX - startX > 50) {
      // Swipe verso destra
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return; // Evita conflitti durante la transizione
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos); // Cicla in avanti
      setIsTransitioning(false);
    }, 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalPhotos - 1 : prevIndex - 1
      ); // Cicla indietro
      setIsTransitioning(false);
    }, 1000);
  };

  const getVisiblePhotos = () => {
    return [...photos, ...photos]; // Duplica le immagini per il loop continuo
  };

  return (
    <section id="home">
      <Helmet>
        <title>Description</title>
        <meta
          name="description"
          content="Unipd, university, computer science, cybersecurity, motorbike, travel, sicurezza informatica"
        />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h1>
                    {`Hi there! I'm Matteo, \n`} <br></br> a{" "}
                    <span id="banner-text">travel lover!</span>
                  </h1>
                  <br></br>
                  <p id="banner-script">
                    I have a passion for <b>motorcycles</b> and{" "}
                    <b>exploring</b> new places <span> 🏍️ &#x1F30D;</span>. My
                    interests also include <b>adrenaline sports</b>. <br></br>I
                    am <b>always on the lookout for new challenges</b> and am
                    eager to broaden my knowledge.
                  </p>
                  <div
                    className="carousel-profile"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className={`carousel-track ${
                        isTransitioning ? "transitioning" : ""
                      }`}
                      style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                      }}
                    >
                      {getVisiblePhotos().map((photo, index) => (
                        <div key={index} className="item">
                          <img
                            className="profile-photo"
                            src={photo.image}
                            alt={photo.name}
                          />
                          <h5 className="profile-script">{photo.name}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
