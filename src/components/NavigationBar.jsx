import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "./Sidebar";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
function NavigationBar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionOffsets = {
      home: document.getElementById("home").offsetTop,
      about: document.getElementById("about").offsetTop,
      skills: document.getElementById("skills").offsetTop,
      works: document.getElementById("works").offsetTop,
      contact: document.getElementById("contact").offsetTop,
    };

    let active = "home";
    for (const [section, offset] of Object?.entries(sectionOffsets)) {
      if (scrollPosition >= offset) {
        active = section;
      }
    }
    setActiveSection(active);
    setScrolling(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        expanded={false}
        className={`sticky-top ${scrolling ? "navigationbg" : ""}`}
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={HashLink} to="#">
            Usman Ch
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={handleShowOffcanvas}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2  my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {links.map((link, index) => (
                <HashLink
                  className={`mx-4 mt-2 NavLinkWithUnderline ${
                    activeSection === link.href.slice(1) ? "active" : ""
                  }`}
                  key={index}
                  to={link.href}
                >
                  <span className="numbers">
                    {String(index + 1).padStart(2, "0")}.
                  </span>{" "}
                  {link.label}
                  <div className="underline"></div>
                </HashLink>
              ))}
            </Nav>
            <Form>
              <Button className="hire" href="#contact">
                HIRE ME
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar show={showOffcanvas} handleClose={handleCloseOffcanvas} link={links} />
    </>
  );
}

export default NavigationBar;
