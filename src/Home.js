// src\Home.js
import React from "react";
import "./Home.css";
import FaceComponent from "./FaceComponent";
import Timeline from "./Timeline";
import TypingComponent from "./TypingComponent";
import { Socialicons } from "./socialprofils";
import Strengths from "./Strengths/Strengths";
import Projects from "./Projects/Projects";
import { ContactUs } from "./contact/Contact";
import Navigation from "./Navigation";
import useAnalytics from "./useAnalytics";

const Home = () => {
  useAnalytics();
  return (
    <section className="grid-container" id="home">
      <Navigation />
      <div className="grid-TypingComponent">
        <TypingComponent />
      </div>
      <div className="grid-EyesComponent">
        <FaceComponent />
      </div>
      <div className="grid-Socialicons">
        <Socialicons />
      </div>
      <div className="grid-strengths">
        <Strengths />
      </div>
      <div className="grid-Timeline" id="timeline">
        <Timeline />
      </div>
      <div className="grid-Projects" id="PROJECTS">
        <Projects />
      </div>
      <div className="grid-Contactus" id="CONTACT">
        <ContactUs />
      </div>
    </section>
  );
};

export default Home;
