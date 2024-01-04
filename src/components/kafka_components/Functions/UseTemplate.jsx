import React, { useState, useEffect } from "react";
//import axios from "axios";
import MessageSendButton from "../Buttons/MessageSendButton";
// import "../designs/PresetTemplate.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { H2, H3, H4, Para, Blockquote } from "../../ui/typography";
import { FileEdit, Wind, SendHorizontal } from "lucide-react";

// This component is responsible for using the selected template and sending the message
export default function UseTemplate(props) {
  const [modifiedTemplate, setModifiedTemplate] = useState("");

  // Reset modifiedTemplate when a new template is selected
  useEffect(() => {
    setModifiedTemplate("");
  }, [props.selectedTemplate]);

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
        <Card>
          <CardHeader>
            <H4>Use Template to Send a Message</H4>
          </CardHeader>
          <CardContent>
            <Para>Selected Template:</Para>
            <Blockquote>{props.selectedTemplate}</Blockquote>
            <Para>Modified Template:</Para>
            <Blockquote>
              {modifiedTemplate ? (
                modifiedTemplate
              ) : (
                <div className="flex items-center">
                  No modifications made yet...
                  <Wind className="ml-1" />
                </div>
              )}
            </Blockquote>
          </CardContent>
          <CardFooter>
            <Button className="m-0" onClick={handleUpdateMessage}>
              <FileEdit className="mr-1 h-4 w-4" /> Update Message
            </Button>
            <MessageSendButton
              className="ml-2"
              modifiedTemplate={modifiedTemplate}
            />
          </CardFooter>
        </Card>
      )}
    </>
  );
}
