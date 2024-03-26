import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = localStorage.getItem('clientToken');
                if (!token) {
                    setIsUserLoggedIn(false);
                    setIsLoading(false);
                    return;
                }

                const response = await axios.get('http://localhost:9999/login', {
                    headers: { Authorization: token },
                });

                setUserDetails(response.data);
                setIsUserLoggedIn(true);
            } catch (error) {
                console.error('Authentication failed', error);
                logout();
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    const logout = () => {
        setIsUserLoggedIn(false);
        setUserDetails({});
        localStorage.removeItem('clientToken');
        window.location.reload();
      };

    if (isLoading) {
        return <div className='main flex h-[100vh] w-[100vw] justify-center items-center font-bold text-[5rem]'>Loading...</div>; // Show a loading indicator while checking authentication
    }

    return (
        <AuthContext.Provider value={{ isUserLoggedIn, userDetails, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
