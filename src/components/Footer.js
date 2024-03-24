import { Container, Row, Col, Button } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/Gmail.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/Github.svg";
import { Helmet } from "react-helmet";
import arrow from "../assets/img/freccia.png";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Helmet>
        <title>Portfolio Tiozzo Matteo</title>
        <meta
          name="description"
          content="github, instagram, email, gmail, linkedin, social, cybersecurity, sicurezza informatica, university, Unipd, Padua"
        />
      </Helmet>
      <Container>
        <Row className="foot">
          <Col size={12} sm={6} className="text-center text-sm-end ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/matteo-tiozzo-319395286/">
                <img src={navIcon1} />
              </a>
              <a href="https://github.com/tiozzom4tteo">
                <img src={navIcon4} />
              </a>
              <a href="mailto:matteotiozzo.lavoro@gmail.com">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/tiozzo_matteo/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>Matteo Tiozzo - 2024. All Rights Reserved</p>
            <a href="#home">
              <Button id="return" variant="primary">
                <img id="arrow" src={arrow} />
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
