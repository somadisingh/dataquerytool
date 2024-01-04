import { useState } from "react";
import ConfigConnection from "../Connections/ConfigConnection.jsx";
import { useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Button } from "../../ui/button";
import { H2, H3, H4, Para } from "../../ui/typography";
import { LogOut, Gauge } from "lucide-react";

// admin page where you can configure the datasource and save the details if required
const AdminConnector = ({ onLogout }) => {
  const navigate = useNavigate();
  const [connectionStatus, setConnectionStatus] = useState(false);

  const handleGoToDashboard = () => {
    navigate("/queryLogin/admin/dashboard");
  };

  return (
    <MaxWidthWrapper className="container mt-2">
      <H2 className="flex items-center justify-between w-full">
        <span>Configure Connection Dashboard</span>{" "}
        <div className="flex gap-2 items-center justify-between">
          <Button
            className="m-0"
            onClick={handleGoToDashboard}
            // disabled={!connectionStatus}
          >
            Go to Dashboard <Gauge className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="destructive" onClick={onLogout}>
            Logout <LogOut className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </H2>
      <div className="connector-buttons1"></div>
      <ConfigConnection setConnectionStatus={setConnectionStatus} />
    </MaxWidthWrapper>
  );
};

export default AdminConnector;
