import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login';
import Signup from './signup';
import PawMatesHome from './home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

// Secure ProtectedRoute Component
const ProtectedRoute = () => {
  const sessionToken = localStorage.getItem('token'); // Check for session token
  const location = useLocation(); 

  if (!sessionToken) {
    
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />; 
};

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} /> {/* Login Route */}
      <Route path="/signup" element={<Signup />} /> {/* Signup Route */}

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<PawMatesHome />} /> {/* Home Route */}
      </Route>
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
