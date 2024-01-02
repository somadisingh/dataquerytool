import ViewConnections from "../Connections/ViewConnection.jsx";
import {useNavigate} from "react-router-dom";

const NormalDash = ({onLogout}) => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/normal/dashboard");
      };

    return (
        <div>
            <h1>Normal User Dashboard</h1>
            <button onClick={onLogout}>LogOut</button>
            <ViewConnections />
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
        </div>
    );
};

export default NormalDash;