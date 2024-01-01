import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const FrontPage = () => {
  const navigate = useNavigate();

  const cardClasses =
    "flex justify-center items-center bg-white transition-all duration-500 ease-in-out overflow-hidden w-full";

  const [expandSide, setExpandSide] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const toggleSide = (side) => {
    setExpandSide(side);
    handleNavigation();
  };

  //   const resetSide = (e) => {
  //     e.preventDefault();
  //     setExpandSide(0);
  //   };

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
        "flex h-screen mx-2 gap-2 bg-primary transition-all duration-500",
        isNavigating ? "animate-fadeOut" : ""
      )}
    >
      <div className={cn(cardClasses, "rounded-r-xl", expandSide === 2 && "w-0")}>
        <Button
          className="w-96 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2"
          variant="default"
          onClick={(e) => {
            e.preventDefault();
            toggleSide(1);
          }}
        >
          Login to MySQL
        </Button>
        {/* <Button
          variant="destructive"
          className="w-full mt-2"
          onClick={resetSide}
        >
          Reset
        </Button> */}
      </div>
      <div className={cn(cardClasses, "rounded-l-xl", expandSide === 1 && "w-0")}>
        <Button
          className="w-96 bg-pink-600 hover:bg-pink-700 text-white rounded-md py-2"
          variant="default"
          onClick={(e) => {
            e.preventDefault();
            toggleSide(2);
          }}
        >
          Login to Kafka
        </Button>
        {/* <Button
          variant="destructive"
          className="w-full mt-2"
          onClick={resetSide}
        >
          Reset
        </Button> */}
      </div>
    </div>
  );
};

export default FrontPage;
