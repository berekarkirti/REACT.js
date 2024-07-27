// Manages user login functionality.
// useState:- Manages email and password states.
// axios:- Submits login credentials to authenticate and retrieves a token.
// Local Storage:- Stores the authentication token for managing user sessions.
// Logout:- Provides functionality to remove the token and log out.
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email,
      password
    };
    axios.post("https://reqres.in/api/login", userdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        const tokenFromRequest = JSON.stringify(res.data.token);
        localStorage.setItem("token", tokenFromRequest);
        console.log(tokenFromRequest);
        alert("Login successful!");
        navigate('/product')
      })
      .catch((err) => {
        console.error(err);
        alert("Login failed!");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful!");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
          className="login-input"
        />

        <label className="login-label">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Your Password"
          name="password"
          required
          className="login-input"
        />

        <button type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Login;
