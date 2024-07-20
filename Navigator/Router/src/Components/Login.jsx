//Purpose: Handles user authentication.
//-Provides a form for users to input email and password.
//-Uses Axios to authenticate users and store a token in localStorage.
//-Redirects users to the Products page upon successful login.

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const tokenFromRequest = res.data.token;
      localStorage.setItem("token", tokenFromRequest);
      alert("Login successful!");
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
