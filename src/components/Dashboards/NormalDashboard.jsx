const NormalDashboard = ({onLogout}) => {
    return (
        <div>
        <h1>NormalDashBoard: from the rql app</h1>
        <button onClick={onLogout}>LogOut</button>
        </div>
    );
};

export default NormalDashboard;