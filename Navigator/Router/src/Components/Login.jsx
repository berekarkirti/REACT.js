import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password
    };
    axios.post("https://reqres.in/api/login",{
      method:"POST",
      Headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userdata)
    })
      .then((res) => {
        let tokenFromRequest = res.data.token;
        localStorage.setItem("token", tokenFromRequest);
      })
      .catch((err) => console.log(err));
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
        <button type="submit" className="logout-button">Logout</button>
      </form>
    </div>
  );
};

export default Login;
