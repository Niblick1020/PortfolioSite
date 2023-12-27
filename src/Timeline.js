// src/Timeline.js
import React, { useState, useEffect } from "react";
import "./Timeline.css";

const experiences = [
  {
    date: "Jun 2019",
    title: "Graduated with an Associates of Arts",
    subTitle: "College of Southern Nevada",
    description: `In 2017, I embarked on my academic journey at CSN with the aspiration of transferring to UNLV to enroll in 
      their computer science program. After two years of dedicated efforts, I earned an Associate of Arts 
      degree from CSN, marking the beginning of my formal education in computer science. During my time at CSN, I 
      honed my critical thinking skills and laid the foundation for my academic pursuits. I delved into essential 
      prerequisites for UNLV, such as calculus and computer science 1 and 2, shaping my understanding of the field. 
      CSN served as a pivotal starting point, fostering the development of my passion for computer science and instilling 
      in me the skills necessary for success in my future endeavors.`,
  },
  {
    date: "Sep 2019",
    title: "Started Attending UNLV",
    description: `This is where it began taking more complicated classes and learning more complex computer science 
    skills such as data structures, object oriented programming, physics and assembly etc. `,
  },
  {
    date: "Oct 2020",
    title: "Substitute Teacher",
    subTitle: "Clark County School District",
    description: `As a substitute teacher, I had the opportunity to engage with students across a diverse range of age groups, from Kindergarten to 12th grade. My responsibilities included teaching various subjects, with a focus on math and science.
I was selected as a long-term substitute teacher for algebra, geometry, and physics classes. In this role, I successfully managed the classroom dynamics and ensured a positive learning environment for students.
This experience not only sharpened my teaching skills but also reinforced my ability to adapt to different educational settings and foster a conducive atmosphere for learning.
`,
  },
  {
    date: "Apr 2022",
    title: "Data Integrity Specialist",
    subTitle: "SafeNest",
    description: `
At SafeNest, I honed my communication and technology skills. I successfully developed and managed an SQL server integrated with our 
CRM via API, enabling seamless weekly data transfers using Python. Additionally, I crafted a dynamic Power BI report linked to 
the SQL server for enhanced data visualizations. Python played a crucial role in various applications, including data corrections,
 API calls, data manipulation with pandas (e.g., pivoting, grouping), and web scraping. I optimized grant reporting, reducing the 
 time from ten days to three to four days by creating reports and manipulating data using Excel and Python with pandas.
    `,
  },
  {
    date: "Dec 2024",
    title: "Bachelors of Science Computer Science",
    subTitle: "University of Nevada Las Vegas",
    description: `Despite facing numerous challenges, including the impact of COVID, I've dedicated several years to pursuing
     my computer science degree. The culmination of this journey is my expected graduation, a testament to my resilience and
      determination to overcome obstacles. I remain steadfast in my commitment to pressing on and achieving my academic goals
       despite the adversities encountered along the way.`,
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
        <div className="timeline-box" key={index}>
          <div>{experience.date}</div>
          <div style={{}}>
            <h3>{experience.title}</h3>
            <h5>{experience.subTitle}</h5>
            <div className="phone-description">{experience.description}</div>
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
              }}
            ></div>
            <div
              style={{
                gridColumn: index % 2 === 0 ? 2 : 4,
                gridRow: index + 1,
                textAlign: index % 2 === 0 ? "right" : "left",
              }}
            >
              {experience.date}
            </div>
            <div
              style={{
                gridColumn: index % 2 === 0 ? 1 : 5,
                gridRow: index + 1,
              }}
            >
              <h3>{experience.title}</h3>
              <h5>{experience.subTitle}</h5>
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
