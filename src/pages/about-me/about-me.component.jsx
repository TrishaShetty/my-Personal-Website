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
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello there! I am <strong>&nbsp;Trisha S Shetty</strong>
                <br/>A passionate software engineer in Java programming, proficient with Data Structures, Algorithms, Design Patterns.
                <br/>
                Having been completed my Engineering in RVCE, 2019 batch, I have joined Aruba Networks as a full time employee.
                <br/>
                I have worked as a Cloud Application Engineer as part of Aruba's Cloud Platform named Central.
                <br/>
                Currently developing a Java Web Application, having 30,000 requests per minute, which is built using infra
                components such as Docker, Postgres, Redis, RabbitMQ, Kafka and Hazelcast.
                <br />Apart from my job, I like designing new stuff, especially websites.
                <br /> I am a tech enthusiast, who is continuously learning new stuffs to cop up with the 
                existing technology stack<br/>
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