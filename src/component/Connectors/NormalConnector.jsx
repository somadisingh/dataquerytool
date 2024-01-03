import ViewConnections from "../Connections/ViewConnection.jsx";
import {useNavigate} from "react-router-dom";

const NormalConnector = ({onLogout}) => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/normal/dashboard");
      };
 
    return (
        <div>
            <h1>Connect Dashboard</h1>
            <button onClick={onLogout}>LogOut</button>
            <ViewConnections />
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
        </div>
    );
};

export default NormalConnector;