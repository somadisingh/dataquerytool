import React from "react";
//import SavedQuery from "../../Functions/SavedQuery";
import NewQueryBuilder from "../Functions/QueryBuilder"
import "../designs/QueryBuilder.css"

const AdminDashboard = ({onLogout}) => {
    return (
        <div className ="query-builder-container">
            <h1>Admin Dashboard</h1>
            <button onClick={onLogout}>LogOut</button>
            <NewQueryBuilder />
            {/* <SavedQuery /> */}
        </div>
    );
};


export default AdminDashboard;