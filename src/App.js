// App.js
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

//import LoginPage from "./pages/LoginPage";
//import AdminDash from "./components/AdminDash";
//import NormalDash from "./components/NormalDash";
import FrontPage from "./pages/FrontPage";
import KafkaLogin from './components/kafka_components/KafkaLogin/kafkaLogin'
import QueryLogin from "./components/query_components/QueryLogin/queryLogin";
import AdminSection from "./components/kafka_components/Dashboards/AdminSection";
import NormalSection from "./components/kafka_components/Dashboards/NormalSection";
import NormalDashboard from "./components/query_components/DashBoards/NormalDashboard";
import AdminDashboard from "./components/query_components/DashBoards/AdminDashboard";
import AdminConnector from "./components/query_components/Connectors/AdminConnector";
import NormalConnector from "./components/query_components/Connectors/NormalConnector";


// const App = () => {
//   const [userType, setUserType] = useState(null);

//   useEffect(() => {
//     // Check if there's already a role stored in local storage
//     const role = localStorage.getItem('userRole');

//     // If there's a role stored in local storage, set the user type
//     if (role) {
//       setUserType(role);
//     }
//   }, []);

//   const handleLogin = (type) => {
//     localStorage.setItem('userRole', type);
//     setUserType(type);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userRole');
//     setUserType(null);
//     return <Navigate to="/" replace />;
//   };

//   function roleBasedNavigation(userType) {
//     if (userType === "admin") {
//       return <Navigate to="/admin" />;
//     } else {
//       return <Navigate to="/normal" />;
//     }
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={userType ? roleBasedNavigation(userType) : <FrontPage />}
//         />

//         {/* KafkaLogin routes */}
//         <Route
//           path="/kafkaLogin"
//           element={
//             userType ? (
//               roleBasedNavigation(userType)
//             ) : (
//               <KafkaLogin onLogin={handleLogin} />
//             )
//           }
//         />
//         <Route
//           path="/admin"
//           element={
//             userType === "admin" ? (
//               <AdminSection onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />
//         <Route
//           path="/normal"
//           element={
//             userType === "normal" ? (
//               <NormalSection onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* QueryLogin routes */}
//         <Route
//           path="/queryLogin"
//           element={
//             userType ? (
//               roleBasedNavigation(userType)
//             ) : (
//               <QueryLogin onLogin={handleLogin} />
//             )
//           }
//         />
//         <Route
//           path="/queryLogin/admin"
//           element={
//             userType === "admin" ? (
//               <AdminDashboard onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />
//         <Route
//           path="/queryLogin/normal"
//           element={
//             userType === "normal" ? (
//               <NormalDashboard onLogout={handleLogout} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

const App = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Check if there's already a role stored in local storage
    const role = localStorage.getItem('userRole');

    // If there's a role stored in local storage, set the user type
    if (role) {
      setUserType(role);
    }
  }, []);

  const handleLogin = (type) => {
    localStorage.setItem('userRole', type);
    setUserType(type);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setUserType(null);
    return <Navigate to="/" replace />;
  };

  function roleBasedNavigation(userType, path) {
    if (path.includes("queryLogin")) {
      // For queryLogin, check the userType and redirect accordingly
      if (userType === "admin") {
        return <Navigate to="/queryLogin/admin" />;
      } else {
        return <Navigate to="/queryLogin/normal" />;
      }
    } else if (userType === "admin") {
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
          element={userType ? roleBasedNavigation(userType, window.location.pathname) : <FrontPage />}
        />

        {/* KafkaLogin routes */}
        <Route
          path="/kafkaLogin"
          element={
            userType ? (
              roleBasedNavigation(userType, window.location.pathname)
            ) : (
              <KafkaLogin onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin"
          element={
            userType === "admin" ? (
              <AdminSection onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/normal"
          element={
            userType === "normal" ? (
              <NormalSection onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* QueryLogin routes */}
        <Route
          path="/queryLogin"
          element={
            userType ? (
              roleBasedNavigation(userType, window.location.pathname)
            ) : (
              <QueryLogin onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/queryLogin/admin/*"
          element={
            userType === "admin" ? (
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
          path="/queryLogin/normal/*"
          element={
            userType === "normal" ? (
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
