import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthContextProvider = ({ children }) => {
    const unAuthState = {
        auth: false,
        token: '',
    };
    const token = localStorage.getItem('user_token');
    let localAuth = { ...unAuthState };
    if (token) {
        try {
            localAuth.auth = true;
            localAuth.token = token;
        } catch (ex) {}
    }
    const [auth, setAuth] = useState(localAuth);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setAuth({ ...unAuthState });
        navigate('/');
    };
    return (
        <AuthContext.Provider value={{ ...auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
