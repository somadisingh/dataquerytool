import React, {useState} from 'react';
import axios from 'axios';
import "../../designs/LoginPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
            username,
            password
        });
        console.log(response.data);
        // if (response.data === "admin") toast.success('Admin Login Successful');
        // else if (response.data === "normal") toast.success('Normal User Login Successful');
        const userType = response.data;
        onLogin(userType);
        }
        catch (error) {
            console.error("Kindly check your credentials and try again", error.message);
            toast.error("Kindly check your credentials and try again");
        }
    };

    return (
        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
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