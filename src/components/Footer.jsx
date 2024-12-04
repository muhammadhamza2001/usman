import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import linkedin from "assets/linkedin.svg";
import github from "assets/github.svg";
import mail from "assets/mail.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    {
      id: "01",
      link: "https://www.linkedin.com/in/muhammad-hamza-ckt/",
      icon: linkedin,
    },
    // {
    //   id: "02",
    //   link: "https://github.com/muhammadhamza2001",
    //   icon: github,
    // },
    // {
    //   id: "03",
    //   link: "mailto:muhammadhamzackt@gmail.com",
    //   icon: mail,
    // },
   
  ];
  return (
    <>
      <footer>
        <Container className="py-3 ">
          <Row>
            <Col xs={12} lg={6}>
            <div className="text-lg-start text-center my-2 lowerfooter-icon">
              {links.map((service) => (
            
                  <Link
                    target="./"
                    to={service.link}
                  >
                    <img src={service.icon} className="mx-2" alt="" />
                  </Link>
                
             
              ))}
                 </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="text-lg-end text-center my-2">
                <p className="m-0">© {currentYear}, All rights reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
