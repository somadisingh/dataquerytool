import ViewConnections from "../Connections/ViewConnection.jsx";
import { useNavigate } from "react-router-dom";
//import "../designs/ViewConnection.css";
import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { H2, H3, H4, Para } from "../../ui/typography";

const NormalConnector = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/queryLogin/normal/dashboard");
  };

  return (
    <MaxWidthWrapper className="container mt-2">
      <H4 className="flex flex-col items-center justify-between w-full">
        <span>Connect Dashboard</span>{" "}
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="flex space-x-4">
            <Button
              variant="destructive"
              size="small"
              className="m-1"
              onClick={onLogout}
            >
              LogOut <LogOut className="ml-2 w-4 h-4" />
            </Button>
            <Button size="small" className="m-1" onClick={handleGoToDashboard}>
              Go to Dashboard
            </Button>
          </div>
          <ViewConnections />
        </div>
      </H4>
    </MaxWidthWrapper>
  );
};

export default NormalConnector;
