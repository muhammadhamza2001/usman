import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import software from "assets/software.svg";
import consult from "assets/consult.svg";
import global from "assets/global.svg";
import qa from "assets/qa.svg";
import webdev from "assets/webdev.svg";
import maintainance from "assets/maintainance.svg";
const Services = () => {
  const services = [
    {
      id: "01",
      title: "Web Development",
      icon: webdev,
    },
    {
      id: "02",
      title: "Custom Software Development",
      icon: global,
    },
    {
      id: "03",
      title: "IT Consulting",
      icon: consult,
    },
    {
      id: "04",
      title: "Software Prototyping",
      icon: software,
    },
    {
      id: "05",
      title: "Maintenance and support",
      icon: maintainance,
    },
    {
      id: "06",
      title: "Quality Assurance",
      icon: qa,
    },
  ];

  return (
    <>
      <Container>
        <Heading title={"MY SERVICES"} />
        <Row className="py-3">
          {services.map((service) => (
            <Col key={service.id} xs={12} lg={4}>
              <Card className="service-card py-4 px-3 my-2">
                <div className="d-flex justify-content-between">
                  <div className="icons">
                    <img src={service.icon} width={"70%"} alt="" />
                  </div>
                  <div>
                    <h2>{service.id}</h2>
                  </div>
                </div>
                <h5 className="text-white m-0 pt-4">{service.title}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
