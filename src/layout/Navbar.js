// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMapMarkerAlt, FaCalculator, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-orange-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Traveller Logo" className="h-11 w-auto rounded" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 text-white mt-4">
              <li className="flex items-center space-x-1">
                <FaHome />
                <Link to="/" className="hover:text-blue-200" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li className="flex items-center space-x-1">
                <FaMapMarkerAlt />
                <Link to="/search-results" className="hover:text-blue-200" onClick={toggleMobileMenu}>Destinations</Link>
              </li>
              <li className="flex items-center space-x-1">
                <FaCalculator />
                <Link to="/trip-calculator" className="hover:text-blue-200" onClick={toggleMobileMenu}>Trip Calculator</Link>
              </li>
              <div className="flex flex-col items-center space-y-4">
                <Link to="/login" className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600" onClick={toggleMobileMenu}>
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="flex items-center space-x-1 bg-white text-orange-500 px-3 py-2 rounded hover:bg-gray-200" onClick={toggleMobileMenu}>
                  <FaUserPlus />
                  <span>Sign Up</span>
                </Link>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
