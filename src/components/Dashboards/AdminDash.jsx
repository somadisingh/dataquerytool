import ConfigConnection from "../Connections/ConfigConnection.jsx";
import {useNavigate} from "react-router-dom";

const AdminDash = ({onLogout}) => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/admin/dashboard");
      };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={onLogout}>LogOut</button>
            <ConfigConnection />
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
            
        </div>
    );
};

export default AdminDash;