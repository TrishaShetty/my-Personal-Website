import React from "react";
// import { Parallax } from "react-parallax";
import Jumbotron from "react-bootstrap/Jumbotron";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Container from "react-bootstrap/Container";

import MyNavBar from './components/my-nav-bar/my-nav-bar.component.jsx';
import MyCarousal from './components/my-carousal/my-carousal.component.jsx';
import TitleMessage from './components/title-message/title-message.component.jsx';
import ScrollDown from './components/scroll-down/scroll-down.component.jsx';
import AboutMe from './pages/about-me/about-me.component.jsx';
import Skills from './pages/skills/skills.component.jsx';
import Experience from './pages/experience/experience.component.jsx';
import ProjectTimeline from './components/project-timeline/project-timeline.component.jsx';
import ContactForm from './pages/contact-form/contact-form.component.jsx';
import FooterPanel from './components/footer/footer.component.jsx';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions.js";

import './App.css';

const App = () => {
  return (<div className="App" style={{ position: "relative" }}>
    <MyNavBar />
    <MyCarousal />
    <TitleMessage />
    <Particles className="particles particles-box" params={particlesOptions} />
    <ScrollDown />
    <div>
      {/* <Parallax blur={{ min: -15, max: 15 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="abc" strength={-200}> */}
      <Jumbotron className="contact-jumbotron">
        <div>
          <Slide bottom duration={500}>
            <Container className="app-jumbotron rounded">
                <AboutMe />
            </Container>
          </Slide>
        </div>
      </Jumbotron>
      {/* </Parallax> */}
    </div>
    <div>
      <Fade bottom duration={500}>
        <Container className="container-box rounded">
            <Skills />
        </Container>
      </Fade>
    </div>
    <div>
      <Container className="container-box rounded">
        <Experience />
      </Container>
    </div>
    <div>
      <Slide bottom duration={500}>
        <Container className="container-box rounded">
            <ProjectTimeline />
        </Container>
      </Slide>
    </div>
    <div>
      <Fade bottom duration={500}>
        <Container className="container-box rounded">
            <ContactForm />
        </Container>
      </Fade>
    </div>
    <hr />
    <FooterPanel />
  </div>);
};

export default App;
