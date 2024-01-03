import React, {useState} from 'react';
import axios from 'axios';
import "../../designs/LoginPage.css";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
            username,
            password
        });

        // console.log(response.data);
        const userType = response.data;
        onLogin(userType);
        }
        catch (error) {
            console.error("Kindly check your credentials and try again", error.message);
        }
    };

    return (
        <div className="container">
            <div className="loginBox">
                <h1>ReactQL: A Query Builder Tool</h1>
                <h2>Login</h2>
                <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;