import React from "react";
import { Parallax } from "react-parallax";
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

import './App.css';

const App = () => {
  return (<div className="App" style={{ position: "relative" }}>
    <MyNavBar />
    <MyCarousal />
    <TitleMessage />
    <ScrollDown />
    <div>
      <Parallax blur={{ min: -15, max: 15 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="abc" strength={-200}>
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <AboutMe />
            </Fade>
          </Container>
        </div>
      </Parallax>
    </div>
    <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <Skills />
        </Slide>
      </Container>
    </div>
    <div>
      <Container className="container-box rounded">
        <Experience />
      </Container>
    </div>
    <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <ProjectTimeline />
        </Slide>
      </Container>
    </div>
  </div>);
};

export default App;
