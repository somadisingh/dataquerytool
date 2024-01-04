import ConfigConnection from "../Connections/ConfigConnection.jsx";
import {useNavigate} from "react-router-dom";
import "../designs/ConfigConnection.css";
// admin page where you can configure the datasource and save the details if required
const AdminConnector = ({onLogout}) => {
    const navigate = useNavigate();

    const handleGoToDashboard = () => {
        navigate("/queryLogin/admin/dashboard");
      };

      return (
        <div className="container1">
          <h1 className="header-admin1">Configure Connection Dashboard</h1>
          <div className="connector-buttons1">
            <button onClick={onLogout}>LogOut</button>
            <button onClick={handleGoToDashboard}>Go to Dashboard</button>
          </div>
          <ConfigConnection />
        </div>
      );
    };

export default AdminConnector;