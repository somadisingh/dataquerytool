import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

const QueryLogin = ({ onLogin }) => {
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
      console.log(response.data);
      // if (response.data === "admin") toast.success('Admin Login Successful');
      // else if (response.data === "normal") toast.success('Normal User Login Successful');
      const userType = response.data;
      onLogin(userType);
    } catch (error) {
      console.error(
        "Kindly check your credentials and try again",
        error.message
      );
      toast.error("Kindly check your credentials and try again");
    }
  };

  return (
    <MaxWidthWrapper className="container flex mt-20 justify-center">
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
      <Card>
        <form className="w-96 px-8 py-6 transition-all animate-fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-center">ReactQL Login</h2>
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

export default QueryLogin;
