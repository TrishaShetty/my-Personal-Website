import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about-me.styles.css";
import Profile from "../../assets/img/profile/Profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                I am <strong>&nbsp;Trisha S Shetty, a designer.</strong>
                Fuelled by a passion for designing compelling products, I have a deep desire to excel and 
                continously improve my work.
                <br/>I started my career as a QA automation engineer in Aruba Networks, HPE.
                <br/>
                Always up for a challenge, and on having a keen interest in product development, I started working on a Java based web application, that was part of
                Aruba's cloud platform, Central. During which I was exposed to working with infrastructures like
                Docker, Postgres, Redis, RabbitMQ, Kafka and Hazelcast. I worked my way upto landing a software development role.
                <br />Currently, working as a Software Developer at Goldman Sachs.<br/>
                <br />You can surely check out my works apart from office on my Github link.<br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1Tw4AxE-inMj-ic3sXOqkfjoHM_7oZu3r/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/TrishaShetty" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/trisha-s-shetty-88307a15a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;