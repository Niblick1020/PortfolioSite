// src\Navigation.js

import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navigation.css";

const animateDropdown = (
  targetHeight,
  dropdownListRef,
  setDropdownHeight,
  setIsAnimating
) => {
  const animationLoop = () => {
    if (!dropdownListRef.current) {
      return;
    }

    const step = Math.max(
      1,
      Math.abs(targetHeight - dropdownListRef.current.offsetHeight) / 10
    );

    const newHeight =
      dropdownListRef.current.offsetHeight +
      (targetHeight > dropdownListRef.current.offsetHeight ? step : -step);
    setDropdownHeight(newHeight);
    console.log(newHeight);
    console.log(targetHeight);
    if (newHeight !== targetHeight) {
      requestAnimationFrame(animationLoop); // Continue animating until target reached
    } else {
      setIsAnimating(false); // Animation complete
    }
  };

  requestAnimationFrame(animationLoop);
};

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(20);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownListRef = useRef(null);

  const toggleDropdown = () => {
    console.log("animating dropdown");
    setIsAnimating(true);
    const targetHeight = dropdownHeight === 20 ? 270 : 20; // Determine target height
    animateDropdown(
      targetHeight,
      dropdownListRef,
      setDropdownHeight,
      setIsAnimating
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownOpen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isDropdownOpen);

  return isDropdownOpen ? (
    <nav className="navbar">
      <div className="dropdown-container">
        <ul
          style={{ height: dropdownHeight, listStyleType: "none" }}
          ref={dropdownListRef}
        >
          <button className="menu-button" onClick={toggleDropdown}>
            Menu
          </button>
          <li className="nav-item">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleDropdown}
            >
              HOME
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="timeline"
              smooth={true}
              duration={500}
              onClick={toggleDropdown}
            >
              TIMELINE
            </ScrollLink>
          </li>
          {/* <li className="nav-item">
            <ScrollLink
              to="SERVICES"
              smooth={true}
              duration={500}
              onClick={toggleDropdown}
            >
              SERVICES
            </ScrollLink>
          </li> */}
          <li className="nav-item">
            <ScrollLink
              to="PROJECTS"
              smooth={true}
              duration={500}
              onClick={toggleDropdown}
            >
              PROJECTS
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="CONTACT"
              smooth={true}
              duration={500}
              onClick={toggleDropdown}
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <ScrollLink to="home" smooth={true} duration={500}>
            HOME
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="timeline" smooth={true} duration={500}>
            TIMELINE
          </ScrollLink>
        </li>
        {/* <li className="nav-item">
          <ScrollLink to="SERVICES" smooth={true} duration={500}>
            SERVICES
          </ScrollLink>
        </li> */}
        <li className="nav-item">
          <ScrollLink to="PROJECTS" smooth={true} duration={500}>
            PROJECTS
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink to="CONTACT" smooth={true} duration={500}>
            CONTACT
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
