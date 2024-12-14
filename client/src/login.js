import React from "react";
import "./login.css";
import logo from "./assets/pawmateslogo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="login-container">
      {/* Login Form */}
      <div className="login-form">
        <h1>Welcome back,</h1>
        <p>Login to continue!</p>
        <img src={logo} alt="Pawmates Logo" className="logo" />
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
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
