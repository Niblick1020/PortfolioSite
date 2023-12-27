// Face.js
import React, { useState, useEffect } from "react";
import "./FaceComponent.css";
import face from "./images/Face_no_eyes.png";
import body from "./images/Body.png";
import Eyes from "./images/Eyes.png";

const FaceComponent = () => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate the rotation based on mouse position
    const xRatio = (clientX / innerWidth - 0.5) * 2; // Normalize to [-1, 1]
    const rotationValue = xRatio * 3;

    setRotation(rotationValue);
  };

  useEffect(() => {
    // Attach event listener when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="Container">
      <div
        style={{
          zIndex: 2,
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "50% 30% ",
        }}
      >
        <img className="face-image" src={face} alt="Face with no eyes" />
        <EyesComponent />
      </div>
      <BodyComponent />
    </div>
  );
};

const EyesComponent = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // console.log(position.x);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ratioX = (e.clientX / window.innerWidth - 0.5) * 2; // Normalize to [-1, 1]
      const ratioY = (e.clientY / window.innerHeight - 0.5) * 2; // Normalize to [-1, 1]

      // Adjust the range based on your preference
      const maxX = 3;
      const maxY = 3;

      // Calculate the new position within the range
      const newPosition = {
        x: ratioX * maxX,
        y: ratioY * maxY,
      };

      setPosition(newPosition);
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // console.log(position.x);
  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: 3,
        position: "relative",
      }}
    >
      <img className="eyes-image" src={Eyes} alt="Face with no eyes" />
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div style={{ zIndex: 1 }}>
      <img className="body-image" src={body} alt="body" />
    </div>
  );
};

export default FaceComponent;
