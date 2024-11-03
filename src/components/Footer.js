// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>About VRS Pickles</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Quality Promise</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Shop Categories</h4>
          <ul>
            <li><a href="#">Pickles</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Spices</a></li>
            <li><a href="#">Gift Boxes</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 VRS Pickles and Snacks. All Rights Reserved.</p>
        <p>Made with ❤️ by VRS Team</p>
      </div>
    </footer>
  );
};

export default Footer;
