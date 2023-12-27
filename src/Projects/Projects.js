// src/Project/Projects.js;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Projects.css";
import API_GIF from "../images/API_Project.gif";

const Project = () => {
  const navigate = useNavigate(); // Use navigate for navigation

  const handleButtonClick = () => {
    navigate("/api");
  };

  return (
    <div>
      <h1 className="title">Projects</h1>
      <div className="Contaner">
        <img className="image" src={API_GIF}></img>
        <div className="about_api">
          <h3>API Project</h3>
          <p className="discription">
            The API project involves creating a secure API key generator and
            demonstrating the integration of an API for retrieving relevant
            data, with a focus on establishing a connection between a Customer
            Relationship Management (CRM) system and a Microsoft SQL Server. The
            project also includes data compilation, transformation, and
            uploading to a SQL Server table, as well as showcasing the final
            output in PowerBI with a visual representation of sales data.
          </p>
          <Link to="/api" className="APIlink">
            Check it out!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
