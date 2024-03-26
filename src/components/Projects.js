import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { ProjectCard } from "./ProjectCard";
import React, { useEffect, useRef } from "react";
import logoNoBg from "../assets/img/logoNoBg.png";
import light from "../assets/img/light.png";
import park from "../assets/img/Park.png";
import AI from "../assets/img/AI.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Sensor Data Factory",
      description: "QT & C++ Development",
      imgUrl: light,
      detailInfo:
        "https://github.com/tiozzom4tteo/Sensor_Data_Factory/blob/main/README.md",
      id: "sensor-data-factory",
    },
    {
      title: "ML Tech",
      description: "Web Development",
      imgUrl: logoNoBg,
      detailInfo: "https://github.com/tiozzom4tteo/TecWeb/tree/master",
      id: "ml-tech",
    },
    {
      title: "Park North Italy Srl",
      description: "MySQL & C++ development",
      imgUrl: park,
      detailInfo: "https://github.com/tiozzom4tteo/Park-North-Italy-Srl",
      id: "park-north-italy-srl",
    },
    {
      title: "Unox S.p.A Hackathon",
      description: "Python & GenAI development",
      imgUrl: AI,
      detailInfo: "https://github.com/tiozzom4tteo/UNOX-Hackathon",
      id: "hackathon",
    },
  ];

  return (
    <section className="project" id="projects">
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="Projects, object oriented programming, c++, c, javascript"
        />
      </Helmet>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
