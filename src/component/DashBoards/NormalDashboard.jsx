import React from "react";
//import NewQueryBuilder from "./QueryBuilder";
import SavedQuery from "../Functions/SavedQuery"

const NormalDashboard = ({onLogout}) => {
    return (
        <div>
        <h1>Normal Dashboard</h1>
        <button onClick={onLogout}>LogOut</button>
        <SavedQuery />
        </div>
    );
};

export default NormalDashboard;