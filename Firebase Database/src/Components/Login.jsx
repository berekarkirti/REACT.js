import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../Services/firebase'; 
import { signInWithPopup, signOut } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import '../Styles/Login.css';

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
      .then((response) => {
      
        localStorage.setItem("token", JSON.stringify(res.data.token));
        alert("Login successful!");
        navigate('/dashboard');
      })
      .catch((error) => {
       
        console.error(error);
        alert("Login failed!");
      });
  };

 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        
        localStorage.setItem("token", JSON.stringify(result.user.accessToken));
        alert("Google Sign-In successful!");
        navigate('/dashboard');
      })
      .catch((error) => {
       
        console.error(error);
        alert("Google Sign-In failed!");
      });
  };

  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
        localStorage.removeItem("token");
        alert("Logout successful!");
      })
      .catch((error) => {
       
        console.error("Logout failed!", error);
      });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Account</h1>
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
      </form>

      <button onClick={handleGoogleSignIn} className="login-button">
        Sign In with <FaGoogle style={{ fontSize: '18px' }} />
      </button>
      <button onClick={handleSignOut} className="logout-button">Sign Out</button>
    </div>
  );
};

export default Login;
