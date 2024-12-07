// src/components/ProductListPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductListPage.css';

const allProducts = [
  // Add all your product data here (same as in ProductList.js)
  { id: 1, name: 'Chicken Pickle', description: 'Spicy Chicken pickle', price: 250, image: '/images/chicken.jpg', category: 'nonveg' },
  { id: 2, name: 'Mutton Pickle', description: 'Tangy Mutton pickle', price: 400, image: '/images/mutton.jpg', category: 'nonveg' },
  // ... (add more products)
];

function ProductListPage() {
  const { category } = useParams();
  const filteredProducts = allProducts.filter(product => product.category === category);

  return (
    <div className="product-list-page">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
