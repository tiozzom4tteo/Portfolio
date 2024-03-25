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
  const toRotate = ["cyber newbie!", "C.S. Unipd student!", "travel lover!"];
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
                    {`Hi there! I'm Matteo, a\n`} <span>{text}</span>
                  </h1>
                  <p>
                    As a <b>Computer Science</b> student in my third year at the
                    <b> University of Padua</b>, I have a passion for both
                    motorbikes 🏍️ and exploring the world through travel{" "}
                    <span> &#x1F3CD;</span> <span>&#x2708; &#x1F30D;</span>. My
                    interests also extend to adrenaline sports. Although I am
                    new to the field of <b>cybersecurity</b>, I am constantly
                    seeking out new challenges and eager to expand my knowledge.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
