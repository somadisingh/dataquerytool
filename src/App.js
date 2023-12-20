import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import AdminDash from './components/AdminDash';
import NormalDash from './components/NormalDash';
import './App.css';

const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType(null);
  };

  return (
    <div>
      {userType ?(
        userType === 'admin' ? (
          <AdminDash onLogout={handleLogout} />
        ) : (
          <NormalDash onLogout={handleLogout} />
        )
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
