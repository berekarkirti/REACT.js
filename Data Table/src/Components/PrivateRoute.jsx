import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// const PrivateRoute = ({Children}) => {
//   const isAuth = localStorage.getItem("token")

//   if(!isAuth){
//     window.location.href="/login"
//   }
//   else{
//     return Children
//   }
// }
// export default PrivateRoute