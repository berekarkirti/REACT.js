// Email:-"eve.holt@reqres.in"
import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authState, setauthState] = useState({
        isAuth: false,
        token: null 
    })

    const loginUser = (token) => {
        setauthState({
            isAuth: true,
            token: token
        });
    }

    const logoutUser = () => {
        setauthState({
            isAuth: false,
            token: null
        });
    }

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, authState}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
