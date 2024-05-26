import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import left from "assets/left.gif";
import resume from "assets/resume.pdf";
const mappingData = [
  { label: "First Name", value: "Muhammad" },
  { label: "Last Name", value: "Hamza" },
  { label: "Age", value: "23 years" },
  { label: "Nationality", value: "Pakistani", flag:true},
  { label: "Education", value: "BS Computer Science" },
  { label: "Freelance", value: "Available", available: true },
];

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Muhammad_Hamza_Resume.pdf";
    link.click();
  };
  return (
    <>
      <Container id="about">
        <Heading title="ABOUT ME" />
        <Row className="py-5">
          <Col xs={12} lg={6}>
            <div className="about-image">
              <Image src={left} width={"100%"} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="about-text pt-4 pt-lg-2 mx-3">
              <h3>
                Hi, I am <span>Muhammad Hamza</span>
              </h3>
              <ul className="py-1 p-0">
                {mappingData.map((item, index) => (
                  <li key={index} className="py-1">
                    <Row>
                      <Col xs={5} lg={3} className="d-flex">
                        <span className="iconround"></span>{" "}
                        <p className="portfolio m-0 ">{item.label}:</p>
                      </Col>
                      <Col xs={7} lg={9}>
                        <p className="portfolio m-0 ">
                          {item.value}
                          {item.available && (
                            <svg
                              width={16}
                              height={16}
                              className="mx-2 available"
                            >
                              <circle cx={6} cy={6} r={6} fill={"#7ddb89"} />
                            </svg>
                          )}

                          {item.flag&&(
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" viewBox="-75 -40 120 80" width="20" height="20">
                            <path fill="#fff" d="M-75-40H45v80H-75z"/>
                            <path fill="#01411C" d="M-45-40h90v80h-90z"/>
                            <circle r="24" fill="#fff"/>
                            <circle r="22" cx="-7" cy="-40" fill="#01411C" transform="rotate(-41.634 45 -40)"/>
                            <path fill="#fff" d="M8.751-17.959l10.11 11.373L3.997-9.844l13.94-6.1-7.692 13.129z"/>
                          </svg>
                          
                          )}
                        </p>
                      </Col>
                    </Row>
                  </li>
                ))}
                <Button className="mt-2" onClick={handleDownload}>
                  DOWNLOAD RESUME
                </Button>
              </ul>
            </div>
          </Col>
        </Row>
       
      </Container>
    </>
  );
};

export default About;
