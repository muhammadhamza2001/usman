import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Heading from "./Heading";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const contactData = [
    {
      icon: (
        <svg
          width="30"
          height="30"
          fill="none"
          stroke="#72e2ae"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.14 17.53c-.744-.75-2.546-1.844-3.421-2.285-1.139-.574-1.233-.62-2.128.045-.597.444-.994.84-1.693.691-.7-.149-2.218-.99-3.548-2.315-1.33-1.326-2.219-2.889-2.368-3.585-.15-.697.253-1.09.693-1.688.62-.843.573-.984.043-2.123-.413-.886-1.54-2.672-2.292-3.413-.805-.795-.805-.654-1.324-.439a7.508 7.508 0 0 0-1.211.646c-.75.498-1.166.912-1.457 1.534-.292.622-.422 2.08 1.081 4.811s2.558 4.127 4.74 6.304c2.184 2.177 3.862 3.348 6.316 4.724 3.036 1.7 4.2 1.369 4.824 1.078.624-.29 1.04-.703 1.54-1.453a7.43 7.43 0 0 0 .646-1.21c.216-.516.357-.516-.44-1.321Z"></path>
        </svg>
      ),
      title: "Contact on phone",
      content: <a href="tel:+923211688108">+92 321-1688-108</a>,
    },
    
    {
      icon: (
        <svg
          width="30"
          height="30"
          fill="none"
          stroke="#72e2ae"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875Z"></path>
          <path d="M5.25 7.5 12 12.75l6.75-5.25"></path>
        </svg>
      ),
      title: "Contact on mail",
      content: (
        <a href="mailto:muhammadhamzackt@gmail.com">
          muhammadhamzackt@gmail.com
        </a>
      ),
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          fill="#72e2ae"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1.5c-4.14 0-7.5 3.024-7.5 6.75 0 6 7.5 14.25 7.5 14.25s7.5-8.25 7.5-14.25c0-3.726-3.36-6.75-7.5-6.75ZM12 12a3 3 0 1 1 0-5.999A3 3 0 0 1 12 12Z"></path>
        </svg>
      ),
      title: "Location",
      content: "Lahore, Pakistan",
    },
  ];

  function sendEmail(e) {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all required fields.",{autoClose:2000});
      return;
    }
    let toastId; 
    toastId = toast.loading("sending");
    emailjs
      .sendForm(
        "service_xoadsbh",
        "template_uxiu8wo",
        e.target,
        "8qj3ox6G6FXIDaHoK"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
         
          toast.update(toastId, { render: "Message sent successfully", type: "success", isLoading: false , autoClose: 2000});
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          toast.update(toastId, { render: "Something went wrong", type: "error", isLoading: false , autoClose: 2000});
        }
      );

    e.target.reset();
  }
  return (
    <>
      <Container className="pb-5 pt-5" id="contact">
        
        <Heading title={"CONTACT"} />
        <Row className="pt-2 pb-5">
          <Col xs={12} lg={5}>
            <h4 className="text-white">Contact Information</h4>
            {contactData.map((contact, index) => (
              <Card key={index} className="service-card p-3 my-3 rounded-3">
                <div className="d-flex py-2">
                  <div className="contact-icons">{contact.icon}</div>
                  <div className="mx-3 contact mt-2">
                    <h5 className="text-white">{contact.title}</h5>
                    <p className="m-0">{contact.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </Col>
          <Col xs={12} lg={7}>
            <Card className="service-card py-3 px-4 mb-3 rounded-3">
              <Form onSubmit={sendEmail}>
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label className="required">Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="user_name"
                    className="bg-transparent py-2"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label className="required">Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="bg-transparent py-2"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="user_Email"
                  />
                </Form.Group>
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label className="required">Subject</Form.Label>
                  <Form.Control
                    type="name"
                    className="bg-transparent py-2 "
                    placeholder="Enter subject..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name="subject"
                  />
                </Form.Group>
                <Form.Group
                  className="my-4"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="required">Message</Form.Label>
                  <Form.Control
                    className="bg-transparent"
                    placeholder="Enter your message..."
                    as="textarea"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                  />
                </Form.Group>

                <Button className="hire" type="submit">
                  SEND MAIL
                </Button>

                
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
