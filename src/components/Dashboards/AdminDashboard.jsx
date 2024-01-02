const AdminDashBoard = ({onLogout}) => {
    return (
        <div>
        <h1>AdminDashBoard: from the rql app</h1>
        <button onClick={onLogout}>LogOut</button>
        </div>
    );
};

export default AdminDashBoard;