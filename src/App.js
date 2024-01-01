// App.js
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import AdminDash from "./components/AdminDash";
import NormalDash from "./components/NormalDash";
import FrontPage from "./pages/FrontPage";

const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType(null);
    return <Navigate to="/" replace />;
  };

  function roleBasedNavigation(userType) {
    if (userType === "admin") {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/normal" />;
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={userType ? roleBasedNavigation(userType) : <FrontPage />}
        />

        <Route
          path="/login"
          element={
            userType ? (
              roleBasedNavigation(userType)
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/admin"
          element={
            userType === "admin" ? (
              <AdminDash onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/normal"
          element={
            userType === "normal" ? (
              <NormalDash onLogout={handleLogout} />
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
