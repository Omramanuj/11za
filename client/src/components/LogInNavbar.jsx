import React from 'react';


const LogInNavbar = () => {


  return (
    <div className="flex justify-between items-center p-4 absolute top-0 left-0 right-0">
      <button className="text-white opacity-75 hover:opacity-100 transition ease-in-out duration-150">
        Back to Site
      </button>
      <div className="flex items-center">
        <a href="https://twitter.com" className="text-white opacity-75 hover:opacity-100 mx-2 transition ease-in-out duration-150">Twitter</a>
        <a href="https://facebook.com" className="text-white opacity-75 hover:opacity-100 mx-2 transition ease-in-out duration-150">Facebook</a>
        <a href="https://instagram.com" className="text-white opacity-75 hover:opacity-100 mx-2 transition ease-in-out duration-150">Instagram</a>
      </div>
    </div>
  );
};

export default LogInNavbar;
