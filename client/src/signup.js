import React from "react";
import "./signup.css";
import logo from "./assets/pawmateslogo.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="signup-container">
      {/* Signup Form */}
      <div className="signup-form">
        <h1>Welcome back,</h1>
        <p>Sign up to join us!</p>
        <img src={logo} alt="Pawmates Logo" className="logo" />
        <form>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-prompt">
          Already have an account?{" "}
          <button
            type="button"
            className="login-link"
            onClick={() => navigate("/login")} // Navigate to Login page
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
