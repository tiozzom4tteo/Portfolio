import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import profilePhoto from "../assets/img/profilePhoto.jpg";
import ski from "../assets/img/ski.jpg";
import skii from "../assets/img/skii.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css"

const photos = [
  { image: profilePhoto, name: "Unox S.p.A. Hackathon" },
  { image: ski, name: "Skiing in the Dolomites" }
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 20000; 
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsTransitioning(false); 
      }, 1000); 
    }, intervalTime);

    return () => clearInterval(interval); 
  }, []);

  const getVisiblePhotos = () => {
    const visiblePhotos = [];
    for (let i = 0; i < 2; i++) {
      visiblePhotos.push(photos[(currentIndex + i) % photos.length]);
    }
    return visiblePhotos;
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
                  <div className="carousel-profile">
                    <div
                      className={`carousel-track ${
                        isTransitioning ? "transitioning" : ""
                      }`}
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
