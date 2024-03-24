import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // Aggiunto

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        expand="md"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                id={activeLink === "home" ? "active-link" : ""}
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                id={activeLink === "skills" ? "active-link" : ""}
                href="#skills"
                className={activeLink === "skills" ? "active" : ""}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                id={activeLink === "projects" ? "active-link" : ""}
                href="#projects"
                className={activeLink === "projects" ? "active" : ""}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                id={activeLink === "About Me" ? "active-link" : ""}
                href="#Aboutme"
                className={activeLink === "About Me" ? "active" : ""}
                onClick={() => onUpdateActiveLink("About Me")}
              >
                About Me
              </Nav.Link>

              <Nav.Link
                id={activeLink === "contacts" ? "active-link" : ""}
                href="#footer"
                className={activeLink === "contacts" ? "active" : ""}
                onClick={() => onUpdateActiveLink("contacts")}
              >
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
