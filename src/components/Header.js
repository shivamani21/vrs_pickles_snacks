import React from 'react';
import './Header.css';
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/images/vrslotus.jpg`} alt="VRS Pickles Logo" />
        <h4>Vrs Pickles</h4>
      </div>
      
      <div className="header-search">
        <input type="text" placeholder="Search..." className="search-bar" />
        <FaSearch className="search-icon" />
      </div>

      <div className="header-right">
        <div className="header-item address">
          <FaMapMarkerAlt className="icon" />
          <span>123 Main St, City</span>
        </div>
        <button className="header-button wishlist">
          <FaHeart className="icon" /> Wishlist
        </button>
        <button className="header-button">
          <FaShoppingCart className="icon" /> Cart
        </button>
        <button className="header-button">Login/Signup</button>
      </div>
    </header>
  );
}

export default Header;
