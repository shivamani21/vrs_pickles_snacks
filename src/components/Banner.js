// src/components/Banner.js
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src="/images/banner.jpg" alt="Banner" className="banner-image" />
      <button className="shop-now">Shop Now</button>
    </div>
  );
}

export default Banner;
