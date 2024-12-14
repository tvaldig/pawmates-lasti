import React, { useState } from "react";
import "./login.css";
import logo from "./assets/pawmateslogo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    // Directly navigate to /home without validation
    navigate("/home");
  };

  return (
    <div className="login-container">
      {/* Login Form */}
      <div className="login-form">
        <h1>Welcome back,</h1>
        <p>Login to continue!</p>
        <img src={logo} alt="Pawmates Logo" className="logo" />
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Track username input
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Track password input
          />
          <button
            type="button"
            className="forgot-password"
            onClick={() => alert("Forgot password clicked!")}
          >
            Forgot password
          </button>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <p className="signup-prompt">
          Don’t have an account?{" "}
          <button
            type="button"
            className="signup-link"
            onClick={() => navigate("/signup")} // Navigate to Signup page
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
