import React, { useState, useEffect } from "react";
import PresetTemplate2 from "../Functions/PresetTemplate2";
import AddDeleteTemplate from "../Buttons/AddDeleteTemplate";
import UseTemplate from "../Functions/UseTemplate";
import axios from "axios";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { H2, H3, H4, Para } from "../../ui/typography";
import { LogOut } from "lucide-react";

const AdminSection = ({ onLogout }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [kafkaServer, setKafkaServer] = useState("");
  const [displayType, setDisplayType] = useState("");

  useEffect(() => {
    console.log("Selected Template on Admin End:", selectedTemplate);
    //console.log("display type on admin: ", displayType);
  }, [selectedTemplate]);

  const handleUpdateConfig = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/server/update", {
        kafkaServer: kafkaServer,
      })
      .then((response) => {
        console.log(response.data);
        toast.success('Kafka configuration updated successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Kafka configuration updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating Kafka configuration:", error);
        toast.error('Error updating Kafka configuration. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    
    <MaxWidthWrapper className="container mt-2">
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
      <H2 className="flex items-center justify-between w-full">
        <span>Kafka Admin Dashboard</span>{" "}
        <Button variant="destructive" onClick={onLogout}>
          Logout <LogOut className="ml-2 w-4 h-4" />
        </Button>
      </H2>

      <Para>
        Kafka Server Configuration (by default application connects to
        localhost:9092)
      </Para>

      <form className="mt-2 flex items-end">
        <div>
          <Label htmlFor="bootstrapServers">Kafka Server Address</Label>
          <Input
            id="bootstrapServers"
            className="mb-0"
            type="text"
            placeholder="host:port"
            value={kafkaServer}
            onChange={(e) => setKafkaServer(e.target.value)}
          />
        </div>
        <Button
          className="mb-0"
          onClick={(e) => handleUpdateConfig(e)}
          disabled={!kafkaServer}
        >
          Update Kafka Configuration
        </Button>
      </form>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Preset Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <AddDeleteTemplate
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
          <PresetTemplate2
            setSelectedTemplate={setSelectedTemplate}
            setDisplayType={setDisplayType}
          />
          <UseTemplate
            selectedTemplate={
              selectedTemplate &&
              (displayType === "plaintext"
                ? selectedTemplate.template_content
                : displayType === "json"
                ? JSON.stringify(selectedTemplate.jsontemplate_content)
                : null)
            }
            displayType={displayType}
          />
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default AdminSection;
//templateID now prints out the correct value, next step is to passit to MessageTemplate
