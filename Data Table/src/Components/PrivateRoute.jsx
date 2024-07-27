// Protects routes that require authentication.
// Token Check:- Verifies if a token is present in local storage.
// Redirect:- Redirects to the login page if the user is not authenticated.
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

import React from 'react'
import { Navigate } from 'react-router-dom'

const Private = ({children}) => {
    const auth=localStorage.getItem('token')
  return auth ? children : <Navigate to={'/login'}/>
}

export default Private