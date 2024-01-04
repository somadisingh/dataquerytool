import React, { useState } from "react";
import axios from "axios";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

const KafkaLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [kafkaServer, setKafkaServer] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/kafka-api/users/login",
        {
          username: username,
          password: password,
        }
      );

      const userType = response.data;
      console.log("User type:", userType);
      onLogin(userType);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // const handleUpdateConfig = () => {
  //   axios
  //     .post("http://localhost:8081/server/update", {
  //       kafkaServer: kafkaServer,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating Kafka configuration:", error);
  //     });
  // };

  return (
    //   {/* <h3>
    //     Kafka Server Configuration (by default application connects to
    //     localhost:9092)
    //   </h3>
    //   <label className="label" htmlFor="bootstrapServers">
    //     Kafka Server Address (Format = broker:port):
    //   </label>
    //   <input
    //     className="input"
    //     type="text"
    //     id="bootstrapServers"
    //     value={kafkaServer}
    //     onChange={(e) => setKafkaServer(e.target.value)}
    //   />

    //   <button className="button" onClick={handleUpdateConfig}>
    //     Update Kafka Configuration
    //   </button> */}
    // </div>
    <MaxWidthWrapper className="container flex mt-20 justify-center">
      <Card>
        <form className="w-96 px-8 py-6 transition-all animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-center">Kafka Login</h2>
          <div className="flex flex-col space-y-4 mb-6">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className="w-full m-0"
            variant="default"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Card>
    </MaxWidthWrapper>
  );
};

export default KafkaLogin;
