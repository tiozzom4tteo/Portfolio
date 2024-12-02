import "animate.css";
import React from "react";
import { Helmet } from "react-helmet";
import AI from "../assets/img/AI.png";
import gan from "../assets/img/gan.png";
import park from "../assets/img/Park.png";
import light from "../assets/img/light.png";
import cyber from "../assets/img/cyber.png";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import mltech from "../assets/img/logoNoBg.png";
import synccity from "../assets/img/synccity.png";
import { Container, Row, Col, Tab } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      title: "Generative Adversarial Network",
      description: "GAN for Malware Analysis",
      imgUrl: gan,
      detailInfo: "https://github.com/tiozzom4tteo/Thesis",
      id: "thesis",
    },
    {
      title: "Unox S.p.A Hackathon",
      description: "Python & GenAI development",
      imgUrl: AI,
      detailInfo: "https://github.com/tiozzom4tteo/UNOX-Hackathon",
      id: "hackathon",
    },
    {
      title: "Cyber security projects",
      description: "Cybersecurity research",
      imgUrl: cyber,
      detailInfo: "https://github.com/tiozzom4tteo/Cybersecurity-Projects",
      id: "cybersecurity",
    },
    {
      title: "Sensor Data Factory",
      description: "QT & C++ Development",
      imgUrl: light,
      detailInfo:
        "https://github.com/tiozzom4tteo/Sensor_Data_Factory/blob/main/README.md",
      id: "sensor-data-factory",
    },
    {
      title: "SyncCity: a smart city monitoring platform",
      description: "Big Data",
      imgUrl: synccity,
      detailInfo: "https://github.com/tiozzom4tteo/SyncCity",
      id: "synccity",
    },
    {
      title: "Park North Italy Srl",
      description: "MySQL & C++ development",
      imgUrl: park,
      detailInfo: "https://github.com/tiozzom4tteo/Park-North-Italy-Srl",
      id: "park-north-italy-srl",
    },
    {
      title: "ML Tech",
      description: "Web Development",
      imgUrl: mltech,
      detailInfo: "https://github.com/tiozzom4tteo/TecWeb/tree/master",
      id: "ml-tech",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="Projects, object oriented programming, c++, c, javascript, cybersecurity, python, intrusion detection system, machine learning, big data, web development, mysql, c++, qt, genai, smart city, monitoring platform"
        />
      </Helmet>
      <Container>
        <Row className="justify-content-center">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center g-3">
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
