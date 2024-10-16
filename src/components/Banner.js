import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import profilePhoto from "../assets/img/profilePhoto.jpg";
import motoPhoto from "../assets/img/profileMoto.png";
import travelPhoto from "../assets/img/photoVacation.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const photos = [{ image: profilePhoto, name: "Unox S.p.A. Hackathon" }];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "travel lover!",
    "cyber newbie!",
    "Comp. Science Unipd student!",
  ];
  const period = 20000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
                    <span id="banner-text">{text}</span>
                  </h1>
                  <br></br>
                  <p id="banner-script">
                  I have a passion for <b>motorcycles</b> and <b>exploring</b>{" "} new places <span> 🏍️ &#x1F30D;</span>. My interests also include <b>adrenaline sports</b>. <br></br>I am{" "} <b>always on the lookout for new challenges</b> and am eager to broaden my knowledge.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={photos.length > 1 ? true : false}
                    autoPlaySpeed={6000}
                    arrows={false}
                    className="carousel-profile"
                  >
                    {photos.map((photo, index) => (
                      <div key={index} className="item">
                        <img
                          className={
                            photos.length > 1 ? "profile-photo" : "unique-photo"
                          }
                          src={photo.image}
                          alt="Profile photo Matteo Tiozzo"
                        />
                        <h5 id="profile-script">{photo.name}</h5>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
