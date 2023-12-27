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
        <p className="CplusText">C++</p>
        <img src={reactLogo} className="react"></img>
        <p className="reactText">React</p>
        <img src={pythonLogo} className="python"></img>
        <p className="pythonText">Python</p>
        <img src={pandasLogo} className="pandas"></img>
        <p className="pandasText">Pandas</p>
      </div>
    </div>
  );
};

export default Strengths;
