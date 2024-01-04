import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
import KafkaLogo from "../components/KafkaLogo";
import SqlLogo from "../components/SqlLogo";
import { cn } from "../lib/utils";

const FrontPage = () => {
  const navigate = useNavigate();

  const cardClasses =
    "flex justify-center items-center bg-white transition-all duration-500 ease-in-out overflow-hidden w-full hover:cursor-pointer hover:shadow-xl hover:bg-primary hover:text-white hover:fill-white hover:border-2 hover:-translate-y-1 ";

  const [expandSide, setExpandSide] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const toggleSide = (side, path) => {
    setExpandSide(side);
    handleNavigation(path);
  };

  const handleNavigation = (path) => {
    setTimeout(() => {
      setIsNavigating(true);
      setTimeout(() => {
        navigate(path);
      }, 500);
    }, 500);
  };

  return (
    <div
      key="1"
      className={cn(
        "flex h-screen transition-all duration-500",
        isNavigating ? "animate-fadeOut" : ""
      )}
    >
      <div
        className={cn(cardClasses, expandSide === 2 && "w-0")}
        onClick={(e) => {
          e.preventDefault();
          toggleSide(1, "/queryLogin");
        }}
      >
        <SqlLogo />
      </div>
      <div
        className={cn(cardClasses, expandSide === 1 && "w-0")}
        onClick={(e) => {
          e.preventDefault();
          toggleSide(2, "/kafkaLogin");
        }}
      >
        <KafkaLogo />
      </div>
    </div>
  );
};

export default FrontPage;
