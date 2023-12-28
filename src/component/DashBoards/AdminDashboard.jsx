import React from "react";
// import SavedQuery from "../component/SavedQuery";
import NewQueryBuilder from "../Functions/QueryBuilder"

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