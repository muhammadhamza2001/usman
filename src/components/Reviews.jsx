import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./Heading";
import clientimage from "assets/potrait2.jpeg";
import justin from "assets/justin.webp";
import girl from "assets/girl.webp";
import arjun from "assets/arjun.jpeg";
import { Rating } from "react-simple-star-rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Reviews = () => {
  const reviewsData = [
    {
      image: justin,
      name: "Justin Aquilla",
      position: "Co-Founder at Optimize.Ad",
      rating: 5,
      content:
        "Working with Usman was an absolute pleasure. Their attention to detail and expertise in web development truly elevated our project. I would highly recommend them to anyone looking for a dedicated and talented developer.",
    },
    {
      image: clientimage,
      name: "Halle Bordson",
      position: "SDS CEO",
      rating: 5,
      content:
        "Usman is not just a skilled developer but also a great communicator. He took the time to understand our requirements and delivered a solution that exceeded our expectations. I look forward to collaborating with him again in the future.",
    },
    {
      image: girl,
      name: "Yasmine Benhalim",
      position: "AlignerBase",
      rating: 5,
      content:
        "Usman is a top-notch developer who brings creativity and expertise to the table. They have a strong grasp of modern technologies and best practices, which reflects in the quality of their work. It was a pleasure working with Usman, and I would highly recommend.",
    },
    {
      image: arjun,
      name: "Arjun Mehta",
      position: "Chief technology officier Ihub",
      rating: 5,
      content:
        "Usman is not only a skilled developer but also a great team player. They actively contribute ideas and solutions, making them a trusted member of any project. I highly recommend Usman for their professionalism and technical expertise.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="pb-3">
        <Heading title={"REVIEWS"}  />
        <Row>
          <Slider {...settings}>
            {reviewsData.map((review, index) => (
              <div>
                <Col xs={11} className="mx-auto pt-5 mb-5" key={index}>
                  <Card className=" work-card client py-3 px-3 rounded-3 my-2">
                    <div className="">
                      <Image
                        src={review.image}
                        alt="Avatar"
                        className="image"
                        width={"100%"}
                      />
                    </div>

                    <div className="mt-3">
                      <h5 className="text-white">{review.name}</h5>
                      <small className="m-0">{review.position}</small>
                      <div>
                        <Rating disableFillHover={true} initialValue={review.rating} />
                      </div>
                      <p className="mt-3">{review.content}</p>
                    </div>
                  </Card>
                </Col>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
};

export default Reviews;
