import ViewConnections from "../Connections/ViewConnection.jsx";
import {useNavigate} from "react-router-dom";
import "../designs/ViewConnection.css";

const NormalConnector = ({onLogout}) => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/normal/dashboard");
      };
 
      return (
        <div className="normal-connector">
          <h1>Connect Dashboard</h1>
          <button onClick={onLogout}>LogOut</button>
          <button onClick={handleGoToDashboard}>Go to Dashboard</button>
          <ViewConnections />
        </div>
      );
    };

export default NormalConnector;