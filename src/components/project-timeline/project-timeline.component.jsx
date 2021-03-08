import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import './project-timeline.styles.css';
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
// import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import L_TTT from "../../assets/img/projects/tic_tac_toe_game.webp";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_MonsterRolodex from "../../assets/img/projects/monsters_rolodex.webp";
import L_CRWN_CLOTHING from "../../assets/img/projects/crwn_clothing.webp";
import L_PERSONAL_WEBSITE from "../../assets/img/projects/Portfolio.webp";
import L_HTML5 from "../../assets/img/skills/html-5.svg";

const ProjectTimeline = () => {
    return(
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    <ImageEvent
                        date="01/10/2019"
                        className="text-center"
                        text="TIC TAC TOE"
                        src={L_TTT}
                        alt="Tic Tac Toe"
                        >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                            <Accordion>
                                <Card>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                >
                                    PROJECT DETAILS
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                    <strong>Description:</strong> A flask based web app to play tic tac toe.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                        <li>Fill name for Player 1</li>
                                        <li>Select "X" or "O"</li>
                                        <li>Fill name for player 2</li>
                                        <li>Play a new game</li>
                                        <li>Declares win, lose or draw</li>
                                        <li>Play again</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_FLASK}
                                                alt="Flask"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            Flask
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_PYTHON}
                                                alt="Python"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            Python
                                            </span>
                                        </li>
                                    <li>
                                        <span className="p-2">
                                            <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                            ></Image>{" "}
                                            CSS3
                                        </span>
                                        </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML
                                        </span>
                                    </li>
                                    </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="https://crwn-franchise.herokuapp.com/"
                                target="_blank"
                                >
                                SEE LIVE
                                </UrlButton>
                                <UrlButton
                                href="https://github.com/TrishaShetty/crwn-clothing"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent
                        date="19/09/2020"
                        className="text-center"
                        text="MONSTER ROLODEX"
                        src={L_MonsterRolodex}
                        alt="Monster Rolodex"
                    >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> An app that allows to
                            search through monsters or users fetched in real-time with user ids.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>Search through Monsters/Users</li>
                            <li>User ids and Monsters being fetched via API call</li>
                            <li>Usage of Redux store</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REDUX}
                                    alt="Redux"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Redux
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_JAVASCRIPT}
                                    alt="Javascript"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Javascript
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_SASS}
                                    alt="Sass"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Sass
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://trishashetty.github.io/monsters-rolodex/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    <UrlButton
                    href="https://github.com/TrishaShetty/monsters-rolodex"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            {/* Project: Crown Clothing */}

            <ImageEvent
                date="13/12/2020"
                className="text-center"
                text="CROWN CLOTHING"
                src={L_CRWN_CLOTHING}
                alt="Crown Clothing"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                    <Accordion>
                        <Card>
                        <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                        >
                            PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                            <strong>Description:</strong> A full fledged e-commerce website,
                            for shopping.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Signup to the app as a new user</li>
                                <li>Signin as an existing user</li>
                                <li>Signin as a google user</li>
                                <li>Add any item to cart you want to puchase</li>
                                <li>Checkout the cart items</li>
                                <li>Pay for the items, via stripe</li>
                                <li>Sign out of the app</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_JAVASCRIPT}
                                        alt="Javascript"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Javascript
                                    </span>
                                </li>
                                <li>
                                <span className="p-2">
                                    <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                </span>
                                </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REDUX}
                                    alt="Redux"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Redux
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT_ROUTER}
                                    alt="React Router"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                React Router
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HEROKU}
                                    alt="Heroku"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Heroku
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_FIREBASE}
                                    alt="Firebase"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Firebase
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                    <Image
                                    src={L_STYLED_COMPONENTS}
                                    alt="Styled Components"
                                    rounded
                                    className="image-style m-1"
                                    ></Image>{" "}
                                    Styled Components
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_SASS}
                                    alt="Sass"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Sass
                                </span>
                            </li>
                            </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://crwn-franchise.herokuapp.com/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TrishaShetty/crwn-clothing"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                </div>
                </ImageEvent>
                <ImageEvent
                    date="14/02/2021"
                    className="text-center"
                    text="PERSONAL WEBSITE"
                    src={L_PERSONAL_WEBSITE}
                    alt="Personal Website"
                    >
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                        <Accordion>
                            <Card>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                            >
                                PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                <strong>Description:</strong> A personal portfolio website, designed for 
                                me. You are currently in this website.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                    <li>Home page</li>
                                    <li>Details about me</li>
                                    <li>Tech stacks</li>
                                    <li>Work experience</li>
                                    <li>My projects with their timeline</li>
                                    <li>Contact details</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_JAVASCRIPT}
                                            alt="Javascript"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Javascript
                                        </span>
                                    </li>
                                    <li>
                                    <span className="p-2">
                                        <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                    </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                            <Image
                                            src={L_STYLED_COMPONENTS}
                                            alt="Styled Components"
                                            rounded
                                            className="image-style m-1"
                                            ></Image>{" "}
                                            Styled Components
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_SASS}
                                            alt="Sass"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Sass
                                        </span>
                                    </li>
                                </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        </div>
                    </div>
                </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline;