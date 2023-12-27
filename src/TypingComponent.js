// src/TypingComponent.js
import React, { useEffect } from "react";
import "./TypingComponent.css";

const TypingComponent = () => {
  useEffect(() => {
    const stringArray = [
      "This website is powered by react!",
      "Just a friendly data analyst :)",
      "Anticipated 2024 UNLV graduate!",
      "Why are assembly programmers always soaking wet?",
      "They work below C-level.",
    ];
    var i = 0;
    let currentString = "|";
    let isdeleteing = true;
    let count = 0;

    async function typeWriter() {
      const demoElement = document.getElementById("demo");

      if (i == 0) {
        count++;
        isdeleteing = false;
        currentString = stringArray[count % stringArray.length];
      }
      if (currentString.length == i) {
        isdeleteing = true;

        // This section give us our effect of the cursor blinking after the sentence
        for (let x = 0; x < 5; x++) {
          await new Promise((resolve) => setTimeout(resolve, 400));
          demoElement.innerHTML = currentString + "|";
          await new Promise((resolve) => setTimeout(resolve, 400));
          demoElement.innerHTML = currentString;
        }
      }

      // This section we display a certain amount characters in our string depending
      // whether we are giving the effect of deleting characters or adding characters
      if (demoElement) {
        const currentText = demoElement.innerHTML;
        if (i < currentString.length && !isdeleteing) {
          demoElement.innerHTML = currentString.slice(0, i) + "|";
          i++;
        } else if (isdeleteing) {
          demoElement.innerHTML = currentString.slice(0, i) + "|";
          i--;
        }

        let randomNumber = 100;

        // This section controls how fast we type characters and delete characters
        if (!isdeleteing) {
          randomNumber = Math.random() * (220 - 70) + 70;
        } else if (isdeleteing) {
          if (currentString.length - 2 == i) {
            randomNumber = 500;
          } else {
            randomNumber = 25;
          }
        }
        setTimeout(typeWriter, randomNumber);
      }
    }

    typeWriter(); // Start typing when the component mounts

    // Note: You may want to add a cleanup function to clear timeouts when the component unmounts
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <p className="hook">Hi, I’m Sebastian Gomez!</p>
      <p className="Typing_animation" id="demo"></p>
      <p className="Paragraph">
        Welcome! I'm a dedicated Data Integrity Specialist based in Las Vegas,
        NV. With a rich background in software and data management, I've
        accumulated valuable experience over the past 2 years.
      </p>
    </div>
  );
};

export default TypingComponent;
