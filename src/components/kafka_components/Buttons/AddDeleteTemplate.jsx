import React, { useState } from "react";
import axios from "axios";
//import MessageSendButton from "./MessageSendButton";
import "../designs/PresetTemplate.css";
import "../designs/AddTemplate.css";

// This component is used to add and delete templates.
export default function AddDeleteTemplate(props) {
  // const [showAddForm, setShowAddForm] = useState(false);
  const [templateName, setName] = useState("");
  const [templateContent, setContent] = useState("");

  const handleAddTemplate = () => {
    const templateData = {
      templateName: templateName,
      templateContent: templateContent,
    };

    axios
      .post("http://localhost:8081/template/save", templateData)
      .then((response) => {
        console.log("Template added successfully:", response.data);
        setName("");
        setContent("");
        document.getElementById("add-template").close(); // Close the add template form dialog box
      })
      .catch((error) => {
        console.error("Error adding template:", error);
      });
  };

  const handleDeleteTemplate = () => {
    if (!props.selectedTemplate.id) {
      console.error("Please provide a template ID for deletion.");
      return;
    }

    axios
      .delete(
        `http://localhost:8081/template/delete/${props.selectedTemplate.id}`
      )
      .then((response) => {
        console.log(
          "Template deleted successfully:",
          props.selectedTemplate.id
        );
        props.setSelectedTemplate(null);
      })
      .catch((error) => {
        console.error("Error deleting template:", error);
      });
  };

  return (
    <div>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("add-template").showModal(); // Show the add template form as a dialog box
        }}
      >
        Add Template
      </button>
      <button
        className="del-button"
        onClick={handleDeleteTemplate}
        disabled={!props.selectedTemplate}
      >
        Delete Template
      </button>

      {/* Add Template Form as a dialog box */}
      <dialog id="add-template">
        <div className="container">
          <h3 className="heading">Add Template</h3>
          <label className="label" htmlFor="templateName">
            Template Name:
          </label>
          <input
            className="input"
            type="text"
            id="templateName"
            value={templateName}
            placeholder="Enter template name"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label" htmlFor="templateContent">
            Template Content:
          </label>
          <textarea
            className="textarea"
            id="templateContent"
            value={templateContent}
            placeholder="Enter template content"
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="button" onClick={handleAddTemplate}>
            Add Template
          </button>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("add-template").close();
            }}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
