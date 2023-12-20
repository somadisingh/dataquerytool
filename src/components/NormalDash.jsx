const NormalDash = ({onLogout}) => {
    return (
        <div>
            <h1>Normal Dashboard</h1>
            <button onClick={onLogout}>LogOut</button>
        </div>
    );
};

export default NormalDash;