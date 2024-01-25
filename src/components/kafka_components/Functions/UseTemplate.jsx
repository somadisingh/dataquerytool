import React, { useState, useEffect } from "react";
//import axios from "axios";
import MessageSendButton from "../Buttons/MessageSendButton";
// import "../designs/PresetTemplate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardContent,
  //CardDescription,
  CardFooter,
  CardHeader,
  //CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
//import { Label } from "../../ui/label";
import { H4, Para, Blockquote } from "../../ui/typography";
import { FileEdit, Wind } from "lucide-react";

// This component is responsible for using the selected template and sending the message
export default function UseTemplate(props) {
  const [modifiedTemplate, setModifiedTemplate] = useState("");
  const [messagePayload, setMessagePayload] = useState(null);

  // Reset modifiedTemplate when a new template is selected
  useEffect(() => {
    setModifiedTemplate("");
  }, [props.selectedTemplate]);

  const handleUpdateMessage = () => {
    //console.log("Selected Template in UseTemplate:", props.selectedTemplate);
    if (props.displayType === "plaintext") {
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
          const newReplacement = prompt(
            `Enter replacement for ${wordToReplace}`
          );
          temp[i] = newReplacement;
        }
      }

      temp = temp.join(" ");
      setModifiedTemplate(temp);
      setMessagePayload(temp);
      console.log("Updated Message:", temp);
    } else if (props.displayType === "json") {
      let temp = props.selectedTemplate;
      let jsonTemp = JSON.parse(temp);
      let keys = Object.keys(jsonTemp);
      // let values = Object.values(jsonTemp);
      // for (let i = 0; i < keys.length; i++) {
      //   if (values[i].match(/{\w+\*}/)) {
      //     // If {word*} format is found, make replacement unskippable
      //     const wordToReplace = values[i].slice(1, -2);
      //     let newReplacement;

      //     do {
      //       newReplacement = prompt(
      //         `Enter replacement for ${wordToReplace} (mandatory):`
      //       );
      //       if (newReplacement === null || newReplacement.trim() === "") {
      //         // If user skips or enters an empty string, show a mandatory message
      //         alert("Replacement is mandatory. Please enter a value.");
      //       }
      //     } while (newReplacement === null || newReplacement.trim() === "");

      //     values[i] = newReplacement;
      //   } else if (values[i].match(/{\w+}/)) {
      //     // If {word} format is found, prompt for replacement
      //     const wordToReplace = values[i].slice(1, -1);
      //     const newReplacement = prompt(`Enter replacement for ${wordToReplace}`);
      //     values[i] = newReplacement;
      //   }
      // }
      // let newJsonTemp = {};
      // for (let i = 0; i < keys.length; i++) {
      //   newJsonTemp[keys[i]] = values[i];
      // }
      for (let i = 0; i < keys.length; i++) {
        let newReplacement;

        do {
          newReplacement = prompt(
            `Enter replacement for ${keys[i]} (mandatory):`
          );
          if (newReplacement === null || newReplacement.trim() === "") {
            // If user skips or enters an empty string, show a mandatory message
            alert("Replacement is mandatory. Please enter a value.");
          }
        } while (newReplacement === null || newReplacement.trim() === "");

        jsonTemp[keys[i]] = newReplacement;
      }
      setMessagePayload(jsonTemp);
      temp = JSON.stringify(jsonTemp, null, 2);
      setModifiedTemplate(temp);
      console.log("Updated Message:", temp);
      //console.log("Updated Message:", jsonTemp);
    }
  };

  const displayTemplate = () => {
    if (props.displayType === "json") {
      try {
        const formattedJSON = JSON.stringify(
          JSON.parse(props.selectedTemplate),
          null,
          2
        );
        return formattedJSON;
      } catch (error) {
        console.error("Invalid JSON format:", error);
        return "Invalid JSON format";
      }
    } else {
      return props.selectedTemplate;
    }
  };

  return (
    <>
      {/* {console.log("Selected Template in UseTemplate:", props.selectedTemplate)}
    {console.log("display mode is: ", props.displayType)} */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="colored"
      />

      {props.selectedTemplate && (
        <Card>
          <CardHeader>
            <H4>Use Template to Send a Message</H4>
          </CardHeader>
          <CardContent>
            <Para>Selected Template:</Para>
            <Blockquote>{displayTemplate()}</Blockquote>
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
              messagePayload={messagePayload}
            />
          </CardFooter>
        </Card>
      )}
    </>
  );
}
