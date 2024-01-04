import React from "react";
import { useNavigate } from "react-router-dom";
//import SavedQuery from "../../Functions/SavedQuery";
import NewQueryBuilder from "../Functions/QueryBuilder";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Button } from "../../ui/button";
import { H2, H3, H4, Para } from "../../ui/typography";
import { LogOut, Radio } from "lucide-react";

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleGoToConnectionConfig = () => {
    navigate("/queryLogin/admin");
  };

  return (
    <MaxWidthWrapper className="container mt-2">
      <H2 className="flex items-center justify-between w-full">
        <span>ReactQL Admin Dashboard</span>{" "}
        <div className="flex gap-2 items-center justify-between">
          <Button className="m-0" onClick={handleGoToConnectionConfig}>
            Configure Connection <Radio className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="destructive" onClick={onLogout}>
            Logout <LogOut className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </H2>
      <NewQueryBuilder />
      {/* <SavedQuery /> */}
    </MaxWidthWrapper>
  );
};

export default AdminDashboard;
