import React from "react";
import SavedQuery from "../Functions/SavedQuery";
import NewQueryBuilder from "../Functions/QueryBuilder"

const AdminDashboard = ({onLogout}) => {
    return (
        <div>
        <h1>Admin Dashboard</h1>
        <button onClick={onLogout}>LogOut</button>
        <NewQueryBuilder />
        {/* <SavedQuery /> */}
        </div>
    );
};


export default AdminDashboard;