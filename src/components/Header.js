// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>VRS Pickles</h1>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="header-button">Login/Signup</button>
        <button className="header-button">Cart</button>
      </div>
    </header>
  );
}

export default Header;
