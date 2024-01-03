import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './component/Login/LoginPage';
import AdminConnector from './component/Connectors/AdminConnector';
import NormalConnector from './component/Connectors/NormalConnector';
import AdminDashboard from './component/DashBoards/AdminDashboard'
import NormalDashboard from './component/DashBoards/NormalDashboard';
import './App.css';

const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType(null);
    return <Navigate to="/" replace />;
  };

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            userType ? (
              userType === 'admin' ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/normal" />
              )
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/admin/*"
          element={
            userType === 'admin' ? (
              <Routes>
                <Route path="/" element={<AdminConnector onLogout={handleLogout} />} />
                <Route path="dashboard" element={<AdminDashboard onLogout={handleLogout} />} />
              </Routes>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/normal/*"
          element={
            userType === 'normal' ? (
              <Routes>
                <Route path="/" element={<NormalConnector onLogout={handleLogout} />} />
                <Route path="dashboard" element={<NormalDashboard onLogout={handleLogout} />} />
              </Routes>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

