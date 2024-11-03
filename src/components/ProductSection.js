// src/components/ProductSection.js
import React from 'react';
import './ProductSection.css';

function ProductSection() {
  const products = [
    { name: 'Non-Veg Pickles', img: '/images/nonvegpickles.jpg', sectionId: 'nonveg' },
    { name: 'Veg Pickles', img: '/images/vegpickles.jpg', sectionId: 'veg' },
    { name: 'Snacks', img: '/images/snacks.jpg', sectionId: 'snacks' },
    { name: 'Sweets', img: '/images/sweets.jpg', sectionId: 'sweets' }
  ];

  // Scroll to the section based on the section ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="product-section">
      {products.map((product, index) => (
        <div
          className="product-card"
          key={index}
          onClick={() => scrollToSection(product.sectionId)}
        >
          <img src={product.img} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
