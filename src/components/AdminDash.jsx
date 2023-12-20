const AdminDash = ({onLogout}) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={onLogout}>LogOut</button>
        </div>
    );
};

export default AdminDash;