import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import left from "assets/left.gif";
import resume from "assets/resume.pdf";
const mappingData = [
  { label: "First Name", value: "Usman" },
  { label: "Last Name", value: "Choudhary" },
  { label: "Age", value: "23 years" },
  { label: "Nationality", value: "United States", flag:true},
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
                Hi, I am <span>Usman Choudhary</span>
              </h3>
              <ul className="py-1 p-0">
                {mappingData.map((item, index) => (
                  <li key={index} className="py-1">
                    <Row>
                      <Col xs={5} lg={4} className="d-flex">
                        <span className="iconround"></span>{" "}
                        <p className="portfolio m-0">{item.label}:</p>
                      </Col>
                      <Col xs={7} lg={8}>
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




                        </p>
                      </Col>
                    </Row>
                  </li>
                ))}
                {/* <Button className="mt-2" onClick={handleDownload}>
                  DOWNLOAD RESUME
                </Button> */}
              </ul>
            </div>
          </Col>
        </Row>
       
      </Container>
    </>
  );
};

export default About;
