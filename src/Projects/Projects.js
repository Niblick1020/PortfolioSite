// src/Project/Projects.js;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Projects.css";
import API_GIF from "../images/API_Project.gif";
import CH_GIF from "../images/Chicken_Project.gif";

const Project = () => {
  const projects = [
    {
      title: "API Project",
      link: "/api",
      image: API_GIF,
      description: `The API project involves creating a secure API key generator and
            demonstrating the integration of an API for retrieving relevant
            data. The project also includes data compilation, transformation,
            and uploading to a SQL Server table, as well as showcasing the final
            output in PowerBI with a visual representation of sales data.`,
    },
    {
      title: "EggGardens",
      link: "https://www.egggardens.com/",
      image: CH_GIF,
      description: `In this project I utilize React for a dynamic front-end experience at www.egggardens.com, 
      and a Node.js backend at api.egggardens.com, the site features an integration with a MongoDB database and 
      secure HTTPs transactions enabled by an Apache server on an AWS EC2 Virtual Machine. In this Project I 
      create a Login and Register page as well as a review section that pulls 3 random reviews from my 
      database when the page is loaded. This project exemplifies my ability to create and manage end-to-end. web solutions
`,
    },
  ];

  return (
    <>
      <h1 className="title">Projects</h1>
      {projects.map((projects, index) => (
        <div key={index} className="project-item">
          <div className="Contaner">
            <img
              className="image"
              src={projects.image}
              alt={projects.title}
            ></img>
            <div className="about_api">
              <h3 className="project_name">{projects.title}</h3>
              <p className="description">{projects.description}</p>
              {projects.link.startsWith("http") ? (
                <a
                  href={projects.link}
                  className="APIlink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check it out!
                </a>
              ) : (
                <Link to={projects.link} className="APIlink">
                  Check it out!
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
