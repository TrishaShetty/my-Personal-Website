import React from 'react';
import Tilt from 'react-tilt'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import './experience.styles.css';
import L_ARUBA from "../../assets/img/experience/Aruba_Networks.svg";

const Experience = () => {
    return(
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_ARUBA} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">SOFTWARE DESIGNER-I</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong>Technology:</strong> Java, Python, Docker, Postgres, Kafka, Redis, RabbitMQ, Hazelcast
                                        <br />
                                        <strong>Duration:</strong> July 2019 - March 2021
                                        <br/>
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                        <li><strong>Developed &amp; enhanced</strong> a Java based web application, having 30,000 requests per minute.</li>
                                        <li>The application was built using infra such as Docker, Postgres, Redis, RabbitMQ, Kafka and Hazelcast.</li>
                                        <li><strong>Developed</strong> automation system to test Switch and Access Point configuration modules of Aruba Central
                                        using both Rest API and Selenium based Web UI automation.
                                        </li>
                                        <li><strong>Provided</strong> debug support for automated modules on their failures.
                                        </li>
                                        </ul>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience;