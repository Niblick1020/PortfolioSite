// src\index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import { APIproject } from "./Projects/API_Project/API";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    {/* <Navigation /> */}
    <Routes>
      {/* Define your main page routes */}
      <Route path="/" element={<Home />} />
      {/* Add a route for your API project */}
      <Route path="/api" element={<APIproject />} />
    </Routes>
  </Router>
);
