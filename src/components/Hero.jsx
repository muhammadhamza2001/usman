import React from "react";
import {  Col, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const textSequence = [
    { text: "Hi, I am a Muhammad Hamza"},
    { text: "Hi, I am a Product Engineer"},
    { text: "Hi, I am a Full-stack Developer"},
    { text: "Hi, I am a Frontend Architect"},
  ];
  return (
    <>
      <div className="herobg" id="home">
        <div className="overlay"></div>
        <Container>
          <Col xs={12} lg={9} className="mx-auto ">
            <div className="hero-outer">
              <div className="hero text-center py-5">
                <TypeAnimation
                  sequence={textSequence
                    .map((step, index) => [
                      step.text,
                      1000,
                      index < textSequence.length - 1 ? "" : undefined,
                    ])
                    .flat()}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "3em", display: "inline-block" }}
                  repeat={Infinity}
                />
                <p className="py-3">
                  Senior Full Stack Engineer with a product-oriented approach
                  and comprehensive end-to-end project management experience.
                  Boasting robust technical expertise in JavaScript,Next, React,
                  Node.js, and TypeScript, and a deep understanding of UX principles.
                </p>
                <div className="text-center scroll">
                  <HashLink className="text-decoration-none" to="#about">
                    <svg
                      stroke="currentColor"
                      className="mx-2"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="inline animate-bounce text-base"
                      height="15px"
                      width="15px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
                      </g>
                    </svg>
                    SCROLL DOWN
                  </HashLink>
                </div>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Hero;
