import React, { useState } from "react";
import "./login.css";
import logo from "./assets/pawmateslogo.png";
import Cat from "./assets/Cat.png"
import Joy from "./assets/Joy.png"
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

function Login() {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password }),
      });
      const data = await response.json();
      if (response.ok && data.sessionToken) {
        toast.success("Login Success!");
        localStorage.setItem("token", data.sessionToken);
        console.log(localStorage)
        localStorage.setItem("userId", data.userId);
        navigate("/home");
      } 
    } catch {
      toast.error("Login Failed!");
    }
  }
  return (
    <div className="login-container">
       <img src={Joy} alt="Joy" class="joy-image" />
       <img src={Cat} alt="Cat" class="cat-image" />
      <Toaster/>
      {/* Login Form */}
      <div className="login-form">
        <h1>Welcome back,</h1>
        <p>Login to continue!</p>
        <img src={logo} alt="Pawmates Logo" className="logo" />
        <form
  onSubmit={(e) => {
    e.preventDefault();
    handleLogin(email, password); // Call the login function with the input values
  }}
>
          <input
            type="text"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Track username input
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
            onClick={() => toast.error("Feature on Development")}
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
