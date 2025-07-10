// Header.js - Top navigation bar for the homepage
// -----------------------------------------------
// Contains the MSN logo (left), centered search bar (with icon), and Sign In button (right).
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="msn-header">
      {/* Logo (left) */}
      <div className="msn-header__logo">MSN</div>
      {/* Centered search bar with search icon */}
      <div className="msn-header__search msn-header__search--centered">
        <input type="text" placeholder="Search MSN..." />
        <button className="msn-header__search-btn" aria-label="Search">
          <FaSearch />
        </button>
      </div>
      {/* Sign In button (right) */}
      <div className="msn-header__profile">
        <button className="msn-header__profile-btn">
          <FaUserCircle className="msn-header__profile-icon" /> Sign In
        </button>
      </div>
    </header>
  );
};

export default Header; 