import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import KafkaLogo from "../components/KafkaLogo";
import SqlLogo from "../components/SqlLogo";
import { cn } from "../lib/utils";

const FrontPage = () => {
  const navigate = useNavigate();

  const cardClasses =
    "flex justify-center items-center bg-white rounded-xl m-4 transition-all duration-500 ease-in-out overflow-hidden w-full hover:cursor-pointer hover:shadow-xl hover:bg-primary hover:text-white hover:fill-white hover:border-2 hover:-translate-y-2 ";

  const [expandSide, setExpandSide] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const toggleSide = (side) => {
    setExpandSide(side);
    handleNavigation();
  };

  const handleNavigation = () => {
    setTimeout(() => {
      setIsNavigating(true);
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }, 500);
  };

  return (
    <div
      key="1"
      className={cn(
        "flex h-screen bg-primary transition-all duration-500",
        isNavigating ? "animate-fadeOut" : ""
      )}
    >
      <div
        className={cn(cardClasses, "mr-2", expandSide === 2 && "w-0")}
        onClick={(e) => {
          e.preventDefault();
          toggleSide(1);
        }}
      >
        <SqlLogo />
      </div>
      <div
        className={cn(cardClasses, "ml-2", expandSide === 1 && "w-0")}
        onClick={(e) => {
          e.preventDefault();
          toggleSide(2);
        }}
      >
        <KafkaLogo />
      </div>
    </div>
  );
};

export default FrontPage;
