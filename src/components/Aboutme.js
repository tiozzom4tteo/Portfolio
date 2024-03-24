import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "animate.css";
import paracadute from "../assets/video/paracadute.mp4";
import bunjee from "../assets/video/bunjee.mp4";
import diving from "../assets/img/diving.JPG";
import ski from "../assets/video/ski.mp4";

export const AboutMe = () => {
  return (
    <section className="Aboutme" id="Aboutme">
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="experience, skydiving, bungee jumping, scuba diving, skiing"
        />
      </Helmet>
      <Container>
        <Row>
          <Col size={12}>
            <h2>About Me</h2>
            <p>These are some of my crazy experience</p>
            <ul>
              <li>
                <p className="adrenaline">Skydiving</p>
                <video id="paracadute" controls>
                  <source src={paracadute} />
                  Il tuo browser non supporta il tag video.
                </video>
              </li>
              <li>
                <p className="adrenaline">Bungee Jumping</p>
                <video id="bunjee" controls muted>
                  <source src={bunjee} />
                  Il tuo browser non supporta il tag video.
                </video>
              </li>
              <li>
                <p className="adrenaline">Scuba Diving</p>
                <img id="diving" src={diving} alt="Scuba Diving" />
              </li>
              <li>
                <p className="adrenaline">Skiing</p>
                <video id="ski" controls muted>
                  <source src={ski} />
                  Il tuo browser non supporta il tag video.
                </video>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
