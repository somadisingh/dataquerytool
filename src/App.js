import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './components/Login/LoginPage';
import AdminDash from './components/Dashboards/AdminDash';
import NormalDash from './components/Dashboards/NormalDash';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import NormalDashboard from './components/Dashboards/NormalDashboard';
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
                <Route path="/" element={<AdminDash onLogout={handleLogout} />} />
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
                <Route path="/" element={<NormalDash onLogout={handleLogout} />} />
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
