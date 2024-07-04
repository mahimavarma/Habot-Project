import React from 'react';
import logo from '../images/logo.jpg';
import arrow from '../images/arrow.jpeg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 bg-white border-b border-gray-300 h-[80px]">
      <div className="flex items-center  pl-12 ">
        <img src={logo} alt="Your Logo" className="h-[120px] w-auto" />
      </div>
      <div className="flex items-center space-x-4 text-gray-500 text-sm">
        <div className="relative hover:text-gray-700 cursor-pointer">
          Find Suppliers
        </div>
        <div className="flex items-center cursor-pointer hover:text-gray-700">
          Find Service Tags 
          <img src={arrow} alt="Arrow" className="ml-2 w-[10px] h-auto" />
        </div>
        <button className="px-4 py-2 border-2 border-[#00732f] text-[#00732f] bg-transparent rounded-md hover:bg-[#00732f] hover:text-white transition-colors duration-300 text-sm font-bold w-[175px] flex justify-center items-center">
          Login/Signup
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
