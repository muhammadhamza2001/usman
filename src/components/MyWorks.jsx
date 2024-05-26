import React from "react";
import { Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Heading from "./Heading";
import ihub from "assets/work/ihub.png";
import alignerbase from "assets/work/alignerbase.png";
import swiftride from "assets/work/swift.png";
import dispatch from "assets/work/dispatch.png";
import semantic from "assets/work/semantic.png";
import omaxx from "assets/work/omaxx.png";
const MyWorks = () => {
  const worksData = [
    {
      id: 1,
      image: ihub,
      title: "iHUB DivyaSampark",
      description: "Government of India Department of Science & Technology",
      link: "https://tih.iitr.ac.in/",
    },
    {
      id: 2,
      image: semantic,
      title: "Semantic Tribe",
      description: "Innovative tech solutions company",
      link: "https://semantictribe.com/",
    },

    {
      id: 3,
      image: alignerbase,
      title: "AlignerBase",
      description: "Dental aligners web application",
      link: "https://alignerbase.com/",
    },
    {
      id: 4,
      image: omaxx,
      title: "Omaxx",
      description: "Fundraising Platform",
      link: "https://omaxx.io/",
    },
    {
      id: 5,
      image: swiftride,
      title: "Swiftride",
      description: "Car subscriptions web application",
      link: "https://www.swiftride.net/",
    },
    {
      id: 6,
      image: dispatch,
      title: "SDS Dispatch",
      description: "Truck Dispatching",
      link: "https://www.sdsdispatch.com/",
    },
    
  ];
  return (
    <>
    <div id="works">

        <Container  >
          <Heading title={"MY WORKS"} />
          <Row >
            {worksData.map((work) => (
              <Col key={work.id} xs={12} lg={4}>
                <Card className="work-card py-3 px-3 rounded-3 my-2">
                  <div className="image-container">
                    <Image
                      src={work.image}
                      alt="Avatar"
                      className="image"
                      width={"100%"}
                    />
                    <div className="overlay">
                      <NavLink
                        href={work.link}
                        target="_blank"
                        className="externallink"
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="#0b1324"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18 10.5v8.625A1.875 1.875 0 0 1 16.125 21H4.875A1.875 1.875 0 0 1 3 19.125V7.875A1.875 1.875 0 0 1 4.875 6h7.85"></path>
                          <path d="M15.75 3H21v5.25"></path>
                          <path d="M10.5 13.5 20.625 3.375"></path>
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                  <div className="mt-3" style={{minHeight:"75px"}}>
                    <h5 className="text-white">{work.title}</h5>
                    <p className="m-0">{work.description}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

    </div>
     
    </>
  );
};

export default MyWorks;
