import React, {useState} from "react";
import "./signup.css";
import logo from "./assets/pawmateslogo.png";
import Cat from "./assets/Cat.png"
import Joy from "./assets/Joy.png"
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

function Signup() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  const handleRegister = async (username, email,  password) => {
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        toast.success("Successfully Registered!");
        navigate("/");
     
      } else {
        toast.error("Email has been registered!");
      }
    } catch {
      toast.error("tes!");
    }
  };
  return (
    <div className="signup-container">  
    
    <img src={Joy} alt="Joy" class="joy-image" />
           <img src={Cat} alt="Cat" class="cat-image" />
      <Toaster />
      {/* Signup Form */}
      <div className="signup-form">
      <h1>Register now!</h1>
        <img src={logo} alt="Pawmates Logo" className="logo" />
        <form
  onSubmit={(e) => {
    e.preventDefault();
    handleRegister(username, email, password); // Call the login function with the input values
  }}
>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={() => navigate("/")} // Navigate to Login page
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
