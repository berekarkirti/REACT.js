// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from "react-use-auth";

// const PrivateRoutes = ({ children }) => {
//   const isAuthenticated = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoutes;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
