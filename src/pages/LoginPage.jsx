import React, { useState } from "react";
import axios from "axios";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          username,
          password,
        }
      );

      // console.log(response.data);
      const userType = response.data;
      onLogin(userType);
    } catch (error) {
      console.error(
        "Kindly check your credentials and try again",
        error.message
      );
    }
    // const userType = "normal";
    // onLogin(userType);
  };

  return (
    <MaxWidthWrapper className="container flex mt-10 justify-center">
      <form className="w-96 px-8 py-6 transition-all animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
        <Button className="w-full" variant="default" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </MaxWidthWrapper>
  );
};

export default LoginPage;
