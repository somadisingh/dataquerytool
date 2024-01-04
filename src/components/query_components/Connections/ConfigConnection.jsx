import React, { useState } from "react";
import axios from "axios";
// import "../designs/ConfigConnection.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

// this component is used to configure the datasource. It takes in the url, username, password and databasename as input and sends a POST request to the backend.
export default function ConfigConnection(props) {
  const [url, setUrl] = useState("");
  const [config, setConfig] = useState({
    url: "",
    username: "",
    password: "",
    databasename: "",
  });

  const handleInputChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value }); // this line basically says, "set the state of config to be the current state of config, but with the value of the input field that was changed"
  };

  const handleConnection = async () => {
    const concatenatedString = `${config.url}/${config.databasename}`;
    setUrl(concatenatedString);
    console.log(url);
    // e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/connection/configure",
        config
      );
      console.log("Datasource configured successfully");
      toast.success("Datasource configured successfully");
      props.setConnectionStatus(true); // pass the connection status to the parent to enable the Go To Dashboard button
    } catch (error) {
      console.error("Error configuring datasource:", error.message);
      toast.error("Error configuring datasource");
    }
  };

  const handleSaveDetails = async () => {
    // Add logic to save details differently, e.g., with a different API endpoint
    try {
      await axios.post("http://localhost:8080/api/connection/save", {
        url: url,
        username: config.username,
        password: config.password,
      });
      console.log("Details saved successfully");
      toast.success("Details saved successfully");
    } catch (error) {
      console.error("Error saving details:", error.message);
      toast.error("Error saving details");
    }
  };

  return (
    <MaxWidthWrapper className="container flex justify-center">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Card className="px-6 py-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <Label>Name</Label>
          <Input
            className="input1"
            type="text"
            name="databasename"
            value={config.databasename}
            onChange={handleInputChange}
          />

          <Label>URL</Label>
          <Input
            className="w-full"
            type="text"
            name="url"
            value={config.url}
            onChange={handleInputChange}
          />

          <Label>Username:</Label>
          <Input
            className="input1"
            type="text"
            name="username"
            value={config.username}
            onChange={handleInputChange}
          />

          <Label>Password:</Label>
          <Input
            className="input1"
            type="password"
            name="password"
            value={config.password}
            onChange={handleInputChange}
          />

          <div className="flex justify-between gap-2">
            <Button className="w-full m-0" onClick={handleConnection}>
              Configure Datasource
            </Button>
            <Button className="w-full m-0" onClick={handleSaveDetails}>
              Save Details
            </Button>
          </div>
        </form>
      </Card>
    </MaxWidthWrapper>
  );
}
