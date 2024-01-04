import React, { useState, useEffect } from "react";
import PresetTemplate2 from "../Functions/PresetTemplate2";
import AddDeleteTemplate from "../Buttons/AddDeleteTemplate";
import UseTemplate from "../Functions/UseTemplate";
import axios from "axios";

const AdminSection = ({ onLogout }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [kafkaServer, setKafkaServer] = useState("");

  useEffect(() => {
    console.log("Selected Template:", selectedTemplate);
  }, [selectedTemplate]);

  const handleUpdateConfig = () => {
    axios
      .post("http://localhost:8081/server/update", {
        kafkaServer: kafkaServer,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating Kafka configuration:", error);
      });
  };

  return (
    <div className="container">
      <h2 className="heading">Admin Section</h2>
      <h3>
        Kafka Server Configuration (by default application connects to
        localhost:9092)
      </h3>
      <label className="label" htmlFor="bootstrapServers">
        Kafka Server Address (Format = broker:port):
      </label>
      <input
        className="input"
        type="text"
        id="bootstrapServers"
        value={kafkaServer}
        onChange={(e) => setKafkaServer(e.target.value)}
      />

      <button
        className="del-button"
        onClick={handleUpdateConfig}
        disabled={!kafkaServer}
      >
        Update Kafka Configuration
      </button>
      <br />
      <button className="button" onClick={onLogout}>
        Logout
      </button>

      <h2 className="heading">Preset Templates</h2>
      <AddDeleteTemplate
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <PresetTemplate2 setSelectedTemplate={setSelectedTemplate} />

      <UseTemplate
        selectedTemplate={selectedTemplate && selectedTemplate.template_content}
      />
    </div>
  );
};

export default AdminSection;
//templateID now prints out the correct value, next step is to passit to MessageTemplate
