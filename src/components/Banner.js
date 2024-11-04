// src/components/Banner.js
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={`${process.env.PUBLIC_URL}/images/20offbanner.jpg`} alt="Banner" className="banner-image" />
    </div>
  );
}


export default Banner;
