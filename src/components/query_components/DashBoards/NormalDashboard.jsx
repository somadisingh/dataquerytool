import React from "react";
//import NewQueryBuilder from "./QueryBuilder";
import SavedQuery from "../Functions/SavedQuery";
//import "../designs/SavedQuery.css"
import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { H2, H3, H4, Para } from "../../ui/typography";

const NormalDashboard = ({ onLogout }) => {
  return (
    <MaxWidthWrapper className="container mt-2 flex flex-col items-center ">
      <h1>Normal Dashboard</h1>
      <Button
        variant="destructive"
        size="small"
        className="m-1"
        onClick={onLogout}
      >
        LogOut <LogOut className="ml-2 w-4 h-4" />
      </Button>
      <SavedQuery />
    </MaxWidthWrapper>
  );
};

export default NormalDashboard;
