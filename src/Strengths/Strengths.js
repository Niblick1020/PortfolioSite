// Strengths.js
import React, { useState, useEffect } from "react";
import "./Strengths.css";
import cPlusPlusLogo from "../images/C++_logo.png";
import reactLogo from "../images/react_logo.png";
import pythonLogo from "../images/python.png";
import pandasLogo from "../images/pythonPandas_Logo.png";

const Strengths = () => {
  return (
    <div>
      <h1 className="title">My Top Strengths</h1>

      <div className="grid-Cotainer">
        <img src={cPlusPlusLogo} className="cplus"></img>
        <p className="CplusTitle">C++</p>
        <p className="CplusTime">
          Introduced in 2018 and used for most of my academic life.
        </p>
        <img src={reactLogo} className="react"></img>
        <p className="reactTitle">React</p>
        <p className="reactTime">
          Used for this website and other front end development.
        </p>
        <img src={pythonLogo} className="python"></img>
        <p className="pythonTitle">Python</p>
        <p className="pythonTime">
          Introduced in 2017 and used for numerous projects including web
          scraping, API calls, Data manipulation and automation.
        </p>
        <img src={pandasLogo} className="pandas"></img>
        <p className="pandasTitle">Pandas</p>
        <p className="pandasTime">
          Used for data manipulation, data scrubbing, and reporting.
        </p>
      </div>
    </div>
  );
};

export default Strengths;
