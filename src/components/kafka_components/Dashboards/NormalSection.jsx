import React, { useState, useEffect } from "react";
import PresetTemplate2 from "../Functions/PresetTemplate2";
import UseTemplate from "../Functions/UseTemplate";

const AdminSection = ({ onLogout }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    console.log("Selected Template:", selectedTemplate);
  }, [selectedTemplate]);

  return (
    <div className="container">
      <h2>Normal User Section</h2>
      <button className="button" onClick={onLogout}>
        Logout
      </button>

      <PresetTemplate2 setSelectedTemplate={setSelectedTemplate} />
      <UseTemplate
        selectedTemplate={selectedTemplate && selectedTemplate.template_content}
      />
    </div>
  );
};

export default AdminSection;
