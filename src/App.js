import React from "react";

import MyNavBar from './components/my-nav-bar/my-nav-bar.component.jsx';
import MyCarousal from './components/my-carousal/my-carousal.component.jsx';
import TitleMessage from './components/title-message/title-message.component.jsx';
import ScrollDown from './components/scroll-down/scroll-down.component.jsx';

import './App.css';

const App = () => {
  return (<div>
    <MyNavBar />
    <MyCarousal />
    <TitleMessage />
    <ScrollDown />
  </div>)
}

export default App;
