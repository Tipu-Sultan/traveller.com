// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMapMarkerAlt, FaCalculator, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; // Add your logo image here

const Navbar = () => {
  return (
    <nav className="bg-orange-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Link */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Traveller Logo" className="h-11 w-auto rounded" /> {/* Logo Image */}
          </Link>

          {/* Navigation Links and Buttons */}
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6 text-white">
              <li className="flex items-center space-x-1">
                <FaHome />
                <Link to="/" className="hover:text-blue-200">Home</Link>
              </li>
              <li className="flex items-center space-x-1">
                <FaMapMarkerAlt />
                <Link to="/search-results" className="hover:text-blue-200">Destinations</Link>
              </li>
              <li className="flex items-center space-x-1">
                <FaCalculator />
                <Link to="/trip-calculator" className="hover:text-blue-200">Trip Calculator</Link>
              </li>
            </ul>

            {/* Login and Signup Buttons */}
            <div className="flex space-x-4">
              <Link to="/login" className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
                <FaSignInAlt />
                <span>Login</span>
              </Link>
              <Link to="/register" className="flex items-center space-x-1 bg-white text-orange-500 px-3 py-2 rounded hover:bg-gray-200">
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
