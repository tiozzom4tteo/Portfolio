import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "cyber newbie!",
    "motorbike fan!",
    "C.S. Unipd student!",
    "travel lover!",
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

  return (
    <section className="banner" id="home">
      <Helmet>
        <title>Description</title>
        <meta
          name="description"
          content="Unipd, university, computer science, cybersecurity, motorbike, travel"
        />
      </Helmet>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi there! I'm Matteo, a\n`}{" "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    As a Computer Science student in my third year at the
                    University of Padua, I have a passion for both motorbikes 🏍️
                    and exploring the world through travel{" "}
                    <span> &#x1F3CD;</span> <span>&#x2708; &#x1F30D;</span>. My
                    interests also extend to adrenaline-fueled sports. Although
                    I am new to the field of cybersecurity, I am constantly
                    seeking out new challenges and eager to expand my knowledge.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* questa è dove devi aggiungerci animazioni riguardo informatica */}
          {/*
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div>
                <img src={"" /*INSERISCI FOTO ACCATTIVANTE />
              </div>
            </TrackVisibility>
          </Col>*/}
        </Row>
      </Container>
    </section>
  );
};
