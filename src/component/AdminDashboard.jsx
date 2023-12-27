import React from "react";
import NewQueryBuilder from "./QueryBuilder";
import SavedQuery from "./SavedQuery";

const AdminDashboard = () => {
    return (
        <div>
        <h1>Admin Dashboard</h1>
        <NewQueryBuilder />
        {/* <SavedQuery /> */}
        </div>
    );
};


export default AdminDashboard;