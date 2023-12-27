// src/TypingComponent.js
import React, { useEffect } from "react";
import "./TypingComponent.css";

const TypingComponent = () => {
  useEffect(() => {
    const stringArray = [
      "Lorem ipsum dummy text blabla",
      "Sebastian Gomez thinks coding is cool",
      "I like turtles",
      "I want to learn react",
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
    <div className="Typing_animation">
      <p id="demo"></p>
    </div>
  );
};

export default TypingComponent;
