// src/Timeline.js
import React, { useState, useEffect } from "react";
import "./Timeline.css";

const experiences = [
  {
    date: "Jun 2019",
    title: "Graduated with an Associates of Arts",
    subTitle: "College of Southern Nevada",
    description: `In 2017, I started on my academic journey at CSN with the goal of transferring to UNLV to enroll in 
      their computer science program. During my time at CSN, I 
      honed my critical thinking skills and laid the foundation for my academic pursuits. I took many 
      prerequisites for UNLV, such as calculus and computer science 1 and 2, shaping my understanding of the field. 
      CSN served as a pivotal starting point, fostering the development of my passion for computer science.`,
  },
  {
    date: "Sep 2019",
    title: "Started Attending UNLV",
    description: `This is where it began taking more complicated classes and learning more complex computer science 
    skills such as data structures, object oriented programming, physics, assembly etc. `,
  },
  {
    date: "Oct 2020",
    title: "Substitute Teacher",
    subTitle: "Clark County School District",
    description: `As a substitute teacher, I had the opportunity to engage with students across a diverse range of age groups, 
    from Kindergarten to 12th grade. My responsibilities included teaching various subjects, with a focus on math and science 
    including my position as a long-term substitute teacher for algebra, geometry, and physics classes.
`,
  },
  {
    date: "Apr 2022",
    title: "Data Integrity Specialist",
    subTitle: "SafeNest",
    description: `
At SafeNest, I honed my communication and technology skills. I successfully developed and managed an SQL server integrated with our 
CRM via API, enabling seamless weekly data transfers using Python. Additionally, I crafted a dynamic Power BI report linked to 
 SQL tables for data visualizations. Python played a crucial role in various applications, including data corrections,
 API calls, data manipulation with pandas (e.g., pivoting, grouping), and web scraping. Another role of my position here was 
 grant reporting, in which I reduced the time from ten days to three days and increased data quality by implementing data 
 strategies using Excel and Python with pandas.
    `,
  },
  {
    date: "Dec 2024",
    title: "Bachelors of Science Computer Science",
    subTitle: "University of Nevada Las Vegas",
    description: `Despite facing numerous challenges, including the impact of COVID-19, I've devoted several years to pursuing
     my computer science degree. my resilience and dedication are a testament to my ability to overcome obstacles. I remain 
     steadfast in my commitment to pressing on and achieving my academic goals despite the adversities encountered along the 
     way.`,
  },
];

const Timeline = () => {
  const [isSmallScreen, setSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen ? (
    <div>
      <h1 className="title"> Timeline</h1>
      {experiences.map((experience, index) => (
        <div className="timeline-container" key={index}>
          <div className="timeline-line"></div>
          {/* This section is for the Date in phone view */}
          <div
            style={{
              margin: "20% 26% 5% 26%",
              fontSize: "26px",
              background: "#33475b",
              color: "aliceblue",
              border: "20px solid #33475b",
              borderRadius: "20px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {experience.date}
          </div>
          {/* This section is for the discription in phone view */}
          <div
            style={{
              fontSize: "20px",
              background: "#33475b",
              color: "aliceblue",
              border: "20px solid #33475b",
              borderRadius: "20px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3>{experience.title}</h3>
            <h5>{experience.subTitle}</h5>
            <div>{experience.description}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h1 className="title"> Timeline</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "37% 10% 5% 10% 37%",
        }}
      >
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <div
              // this is my vertical line
              style={{
                gridColumn: 3,
                background: "#33475b",
                margin: "0px 40% 0px 40%",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
              }}
            ></div>
            <div
              style={{
                gridColumn: index % 2 === 0 ? 2 : 4,
                gridRow: index + 1,
                textAlign: index % 2 === 0 ? "right" : "left",
                fontSize: "24px",
                fontWeight: "bold",
                textShadow: "1px 2px 6px rgba(0, 0, 0, 0.5)",
              }}
            >
              {experience.date}
            </div>
            <div
              style={{
                gridColumn: index % 2 === 0 ? 1 : 5,
                gridRow: index + 1,
                fontSize: "22px",
                background: "#33475b",
                color: "aliceblue",
                border: "20px solid #33475b",
                borderRadius: "20px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2>{experience.title}</h2>
              <h4>{experience.subTitle}</h4>
              {/* <div>{experience.description.substring(0, 120)}</div> */}
              <div>{experience.description}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
