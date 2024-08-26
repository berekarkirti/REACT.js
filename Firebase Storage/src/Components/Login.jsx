import React from 'react';
import { GoogleButton } from 'react-google-button';
import { signInWithPopup, signOut } from "firebase/auth"; 
import { auth, googleProvider } from '../services/firebase'
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        localStorage.setItem("token", JSON.stringify(result.user.accessToken));
        alert("Google Sign-In successful!");
        navigate('/product');
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
      <GoogleButton   onClick={handleGoogleSignIn}/>
      <button className='logout-button' onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Login;
