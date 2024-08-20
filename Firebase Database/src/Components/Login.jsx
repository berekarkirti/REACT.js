import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../Services/firebase'; 
import { signInWithPopup, signOut } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import '../Styles/Login.css';

const Login = () => {
  // State for storing email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook to programmatically navigate to different pages
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Data to be sent to the server
    const userdata = {
      email,
      password
    };

    // Make a POST request to the login API
    axios.post("https://reqres.in/api/login", userdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        // Save token to local storage and navigate to dashboard on success
        localStorage.setItem("token", JSON.stringify(res.data.token));
        alert("Login successful!");
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle login errors
        console.error(error);
        alert("Login failed!");
      });
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Save Google access token to local storage and navigate to dashboard on success
        localStorage.setItem("token", JSON.stringify(result.user.accessToken));
        alert("Google Sign-In successful!");
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle Google Sign-In errors
        console.error(error);
        alert("Google Sign-In failed!");
      });
  };

  // Function to handle user sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Remove token from local storage on success
        localStorage.removeItem("token");
        alert("Logout successful!");
      })
      .catch((error) => {
        // Handle sign-out errors
        console.error("Logout failed!", error);
      });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          value={email} // Controlled input value
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
          className="login-input"
        />

        <label className="login-label">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          value={password} // Controlled input value
          type="password"
          placeholder="Enter Your Password"
          name="password"
          required
          className="login-input"
        />
      </form>

      <button onClick={handleGoogleSignIn} className="login-button">
        Sign In with <FaGoogle style={{ fontSize: '18px' }} /> {/* Google Sign-In button */}
      </button>
      <button onClick={handleSignOut} className="logout-button">Sign Out</button> {/* Sign Out button */}
    </div>
  );
};

export default Login;
