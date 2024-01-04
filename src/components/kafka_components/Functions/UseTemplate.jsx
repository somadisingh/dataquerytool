import React, { useState } from "react";
//import axios from "axios";
import MessageSendButton from "../Buttons/MessageSendButton";
import "../designs/PresetTemplate.css";

// This component is responsible for using the selected template and sending the message
export default function UseTemplate(props) {
  const [modifiedTemplate, setModifiedTemplate] = useState("");

  const handleUpdateMessage = async () => {
    let temp = props.selectedTemplate.split(" ");

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].match(/{\w+\*}/)) {
        // If {word*} format is found, make replacement unskippable
        const wordToReplace = temp[i].slice(1, -2);
        let newReplacement;

        do {
          newReplacement = prompt(
            `Enter replacement for ${wordToReplace} (mandatory):`
          );
          if (newReplacement === null || newReplacement.trim() === "") {
            // If user skips or enters an empty string, show a mandatory message
            alert("Replacement is mandatory. Please enter a value.");
          }
        } while (newReplacement === null || newReplacement.trim() === "");

        temp[i] = newReplacement;
      } else if (temp[i].match(/{\w+}/)) {
        // If {word} format is found, prompt for replacement
        const wordToReplace = temp[i].slice(1, -1);
        const newReplacement = prompt(`Enter replacement for ${wordToReplace}`);
        temp[i] = newReplacement;
      }
    }

    temp = temp.join(" ");
    setModifiedTemplate(temp);
    console.log("Updated Message:", temp);
  };

  return (
    <>
      {props.selectedTemplate && (
        <div>
          <h4 className="selectedTemplate">Selected Template Content:</h4>
          <p>{props.selectedTemplate}</p>
          <p className="modifiedTemplate">Modified Template:</p>
          <p>{modifiedTemplate}</p>
          <button className="updateButton" onClick={handleUpdateMessage}>
            Update Message
          </button>
          <MessageSendButton modifiedTemplate={modifiedTemplate} />
        </div>
      )}
    </>
  );
}
