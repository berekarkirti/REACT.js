//Purpose: Protects routes that require authentication.
//-Checks if a user is authenticated by verifying the token in localStorage.
//-Redirects unauthenticated users to the Login page.
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
