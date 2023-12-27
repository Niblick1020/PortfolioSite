// src\index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FaceComponent from "./FaceComponent";
import Timeline from "./Timeline";
import TypingComponent from "./TypingComponent";
import { Socialicons } from "./socialprofils";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import { ContactUs } from "./contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navigation />
    <section className="grid-container" id="home">
      <div className="grid-TypingComponent">
        <p>Hi, I’m Sebastian Gomez!</p>
        <TypingComponent />
        <p className="Paragraph">
          Welcome! I'm a dedicated Data Integrity Specialist based in Las Vegas,
          NV. With a rich background in software and data management, I've
          accumulated valuable experience over the past 2 years.
        </p>
      </div>
      <div className="grid-EyesComponent">
        <FaceComponent />
      </div>
      <div className="grid-Socialicons">
        <Socialicons />
      </div>
      <div className="grid-Timeline" id="timeline">
        <Timeline />
      </div>
      <div className="grid-Contactus" id="CONTACT">
        <ContactUs />
      </div>
    </section>
  </Router>
);
