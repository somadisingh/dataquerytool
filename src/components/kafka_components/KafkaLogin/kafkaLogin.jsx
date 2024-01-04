import React, { useState } from "react";
import axios from "axios";
import "../designs/Login.css";

const KafkaLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [kafkaServer, setKafkaServer] = useState("");

  const handleLogin = async () => {
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
    <div className="container">
      <h1 className="title">Kafka Login</h1>
      <label className="label" htmlFor="username">
        Username:
      </label>
      <input
        className="input"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="label" htmlFor="password">
        Password:
      </label>
      <input
        className="input"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button" onClick={handleLogin}>
        Login
      </button>

      {/* <h3>
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

      <button className="button" onClick={handleUpdateConfig}>
        Update Kafka Configuration
      </button> */}
    </div>
  );
};

export default KafkaLogin;
