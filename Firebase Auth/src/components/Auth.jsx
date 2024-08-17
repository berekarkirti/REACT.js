import React, { useState } from 'react';
import { auth, googleProvider } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import '../styles/Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up: ", userCredential.user);
    } catch (error) {
      console.error("Error signing up: ", error.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in: ", userCredential.user);
    } catch (error) {
      console.error("Error logging in: ", error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User logged in with Google: ", result.user);
    } catch (error) {
      console.error("Error logging in with Google: ", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Email Authentication</h2>
      <div className="login-form">
        <label className="login-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          placeholder="Email"
        />
        <label className="login-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          placeholder="Password"
        />
        <button className="login-button" onClick={signUp}>Sign Up</button>
        <button className="login-button" onClick={login}>Login</button>
      </div>

      <h2 className="login-title">Google Authentication</h2>
      <button className="login-button" onClick={googleLogin}>Login with Google</button>
    </div>
  );
};

export default Auth;
