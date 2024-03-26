import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {

    const {isUserLoggedIn , userDetails, logout} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isUserLoggedIn == false){
            { navigate('/login', {replace: true})}
         }
    }, [isUserLoggedIn])
    const handleAuthClick = () => {
      if(isUserLoggedIn) {
        logout();
      }
    }
    if(isUserLoggedIn == null && userDetails == null) {
        return <div className='main flex h-[100vh] w-[100vw] justify-center items-center font-bold text-[]'>Loading...</div>
    } else if (isUserLoggedIn == true) {
        return  (
    <nav className="flex justify-between items-center z-10 py-4 px-8 shadow-md transition-colors duration-300   text-white">
      <Link to="/" className="flex items-center text-white">
        <img src="https://11za.com/wp-content/themes/one-1za/assets/images/logo/11za_logo.svg" alt="Logo" className="h-14 mr-2" />
        <span className={`text-xl font-bold text-green-500`}></span>
      </Link>
      <div>
        <button onClick={handleAuthClick} className={`px-4 py-2 rounded transition-colors duration-300 bg-white text-green-700 hover:bg-green-800` }>
          {isUserLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  );
};
};
export default Navbar;
