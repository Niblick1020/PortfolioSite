// src\Navigation.js

import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [toggle, settoggle] = useState(false);
  const toggleButtonRef = useRef(null);

  // const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isPhone);

  function myFunction(event) {
    event.currentTarget.classList.toggle("change");

    // here is where we toggle the menu options in phone view
    if (toggle) {
      closeNav();
      settoggle(false);
    } else {
      openNav();
      settoggle(true);
    }
  }

  function handleMenuOptionClick() {
    closeNav();
    settoggle(false); // Resets the toggle state
    if (toggleButtonRef.current) {
      toggleButtonRef.current.classList.toggle("change", false);
    }
    if (window.gtag) {
      window.gtag("event", "select_content", {
        content_type: "navigation",
        item_id: "some_identifier_here",
      });
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      {isPhone ? (
        <div
          className="container"
          onClick={(event) => myFunction(event)}
          ref={toggleButtonRef}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div id="mySidenav" class="sidenav">
            <ScrollLink
              onClick={handleMenuOptionClick}
              className="a"
              to="home"
              smooth={true}
              duration={500}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              onClick={handleMenuOptionClick}
              className="a"
              to="timeline"
              smooth={true}
              duration={500}
            >
              TIMELINE
            </ScrollLink>
            <ScrollLink
              onClick={handleMenuOptionClick}
              className="a"
              to="SERVICES"
              smooth={true}
              duration={500}
            >
              SERVICES
            </ScrollLink>
            <ScrollLink
              onClick={handleMenuOptionClick}
              className="a"
              to="PROJECTS"
              smooth={true}
              duration={500}
            >
              PROJECTS
            </ScrollLink>
            <ScrollLink
              onClick={handleMenuOptionClick}
              className="a"
              to="CONTACT"
              smooth={true}
              duration={500}
            >
              CONTACT
            </ScrollLink>
            <a
              href="/Redacted_Resume_Jan-2024.pdf"
              className="resumephone a"
              download="Redacted_Resume_Jan-2024.pdf"
            >
              Resume
            </a>
          </div>
        </div>
      ) : (
        <div className="topnav">
          <ScrollLink className="a" to="home" smooth={true} duration={500}>
            HOME
          </ScrollLink>
          <ScrollLink className="a" to="timeline" smooth={true} duration={500}>
            TIMELINE
          </ScrollLink>
          <ScrollLink className="a" to="SERVICES" smooth={true} duration={500}>
            SERVICES
          </ScrollLink>
          <ScrollLink className="a" to="PROJECTS" smooth={true} duration={500}>
            PROJECTS
          </ScrollLink>
          <ScrollLink className="a" to="CONTACT" smooth={true} duration={500}>
            CONTACT
          </ScrollLink>
          <a
            href="/Redacted_Resume_Jan-2024.pdf"
            className="split a"
            download="Redacted_Resume_Jan-2024.pdf"
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
};
export default Navigation;
