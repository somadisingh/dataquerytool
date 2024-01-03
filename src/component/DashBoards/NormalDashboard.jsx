import React from "react";
//import NewQueryBuilder from "./QueryBuilder";
import SavedQuery from "../Functions/SavedQuery"
import "../../designs/SavedQuery.css"

const NormalDashboard = ({onLogout}) => {
    return (
        <div className="saved-query-container">
        <h1>Normal Dashboard</h1>
        <button onClick={onLogout}>LogOut</button>
        <SavedQuery />
        </div>
    );
};

export default NormalDashboard;