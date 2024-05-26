import React from "react";
import Heading from "./Heading";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
const progess = [
  { text: "Front-end Development", value: 95 },
  { text: "Back-end Development", value: 90 },
  { text: "UI/UX Designing", value: 90 },
  { text: "Software Quality Assurance", value: 90 },
];
const skillsData = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 100 },
  { name: "Bootstrap", percentage: 100 },
  { name: "Tailwind CSS", percentage: 100 },
  { name: "React", percentage: 96 },
  { name: "Node.js", percentage: 90 },
  { name: "MongoDB", percentage: 85 },
  { name: "Laravel", percentage: 90 },
];

const Skills = () => {
  return (
    <>
      <Container className="py-3" id="skills">
        <Heading title={"MY SKILLS"} />
        <Row className="py-3">
          {progess.map((progess, index) => (
            <Col xs={12} lg={3}>
              <Card className="progress-card text-center p-3 my-2">
                <Col xs={5} className="mx-auto">
                  <CircularProgressbar
                    value={progess.value}
                    text={`${progess.value}%`}
                  />
                  
                </Col>
                <h5 className="text-white mt-3">{progess.text}</h5>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {skillsData.map((skill, index) => (
            <Col key={index} xs={12} lg={6}>
              <div className="py-3">
                <h5 className="text-white mb-4">{`${skill.name} - (${skill.percentage}%)`}</h5>
                <ProgressBar
                  now={skill.percentage}
                  label={`${skill.percentage}%`}
                  visuallyHidden
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Skills;
