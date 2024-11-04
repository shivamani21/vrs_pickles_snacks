// src/components/ProductSection.js
import React from 'react';
import './ProductSection.css';

function ProductSection() {
  const products = [
    { name: 'Non-Veg Pickles', img: `${process.env.PUBLIC_URL}/images/nonvegpickles.jpg`, sectionId: 'nonveg' },
    { name: 'Veg Pickles', img: `${process.env.PUBLIC_URL}/images/vegpickles.jpg`, sectionId: 'veg' },
    { name: 'Snacks', img: `${process.env.PUBLIC_URL}/images/snacks.jpg`, sectionId: 'snacks' },
    { name: 'Sweets', img: `${process.env.PUBLIC_URL}/images/sweets.jpg`, sectionId: 'sweets' }
  ];

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
          <div className="product-image-container">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
