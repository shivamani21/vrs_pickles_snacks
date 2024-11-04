// src/components/ProductList.js
import React, { useState } from 'react';
import './ProductList.css';

const products = [
  // Non-Veg Pickles
  { id: 1, name: 'Chicken Pickle', description: 'Spicy Chicken pickle', price: 250, image: '/images/chicken.jpg', category: 'nonveg' },
  { id: 2, name: 'Mutton Pickle', description: 'Tangy Mutton pickle', price: 400, image: '/images/mutton.jpg', category: 'nonveg' },
  { id: 3, name: 'Prawns Pickle', description: 'Delicious Prawns pickle', price: 450, image: '/images/prawns.jpg', category: 'nonveg' },
  { id: 4, name: 'Fish Pickle', description: 'Tasty Fish pickle', price: 300, image: '/images/fishpickle.jpg', category: 'nonveg' },
  { id: 5, name: 'Chinthapudi Chicken Pickle', description: 'Savory Chinthapudi Chicken pickle', price: 500, image: '/images/chinthapudichickenpickle.jpg', category: 'nonveg' },
  { id: 6, name: 'Egg Pickle', description: 'Spicy Egg pickle', price: 200, image: '/images/eggpickle.jpg', category: 'nonveg' },
  { id: 7, name: 'Avakaya Chicken Pickle', description: 'Spicy Avakaya Chicken pickle', price: 350, image: '/images/avakayachickenpickle.jpg', category: 'nonveg' },
  { id: 8, name: 'Gongura Chicken Pickle', description: 'Savory Gongura Chicken pickle', price: 600, image: '/images/gongurachickenpickle.jpg', category: 'nonveg' },
  { id: 9, name: 'Gongura Mutton Pickle', description: 'Savory Gongura Mutton pickle', price: 550, image: '/images/gonguramuttonpickle.jpg', category: 'nonveg' },
  { id: 10, name: 'Shrimp Pickle', description: 'Shrimp in spices', price: 450, image: '/images/shrimppickle.jpg', category: 'nonveg' },

  // Veg Pickles
  { id: 11, name: 'Mango Pickle', description: 'Classic Mango pickle', price: 120, image: '/images/mango.jpg', category: 'veg' },
  { id: 12, name: 'Lemon Pickle', description: 'Zesty Lemon pickle', price: 100, image: '/images/lemon.jpg', category: 'veg' },
  { id: 13, name: 'Garlic Pickle', description: 'Savory Garlic pickle', price: 110, image: '/images/garlic.jpg', category: 'veg' },
  { id: 14, name: 'Gooseberry Pickle', description: 'Savory Amla pickle', price: 110, image: '/images/gooseberry.jpg', category: 'veg' },
  { id: 15, name: 'Greenchilli Pickle', description: 'Savory Greenchilli pickle', price: 110, image: '/images/greenchilli.jpg', category: 'veg' },
  { id: 16, name: 'Tomato Pickle', description: 'Savory Tomato pickle', price: 110, image: '/images/tomato.png', category: 'veg' },
  { id: 17, name: 'Tamarind Pickle', description: 'Tangy Tamarind pickle', price: 115, image: '/images/tamarind.png', category: 'veg' },
  { id: 18, name: 'Carrot Pickle', description: 'Crunchy Carrot pickle', price: 130, image: '/images/carrotpickle.jpg', category: 'veg' },
  { id: 19, name: 'Ginger Pickle', description: 'Spicy Ginger pickle', price: 120, image: '/images/gingerpickle.jpg', category: 'veg' },
  { id: 20, name: 'Onion Pickle', description: 'Tangy Onion pickle', price: 140, image: '/images/onionpickle.jpg', category: 'veg' },

  // Snacks
  { id: 21, name: 'Chips', description: 'Crispy potato chips', price: 50, image: '/images/chips.jpg', category: 'snacks' },
  { id: 22, name: 'Nuts', description: 'Mixed nuts', price: 150, image: '/images/nuts.jpg', category: 'snacks' },
  { id: 23, name: 'Popcorn', description: 'Buttery popcorn', price: 80, image: '/images/popcorn.jpg', category: 'snacks' },
  { id: 24, name: 'Namkeen', description: 'Spicy namkeen mix', price: 70, image: '/images/namkeen.jpg', category: 'snacks' },
  { id: 25, name: 'Samosa', description: 'Crispy samosas', price: 40, image: '/images/samosa.jpg', category: 'snacks' },
  { id: 26, name: 'Pakora', description: 'Crunchy pakoras', price: 60, image: '/images/pakora.jpg', category: 'snacks' },
  { id: 27, name: 'Murukku', description: 'Savory murukku', price: 50, image: '/images/murukku.jpg', category: 'snacks' },
  { id: 28, name: 'Dhokla', description: 'Soft and spongy dhokla', price: 30, image: '/images/dhokla.jpg', category: 'snacks' },
  { id: 29, name: 'Kachori', description: 'Spicy kachoris', price: 40, image: '/images/kachori.jpg', category: 'snacks' },
  { id: 30, name: 'Biscuit', description: 'Crispy biscuits', price: 25, image: '/images/biscuit.jpg', category: 'snacks' },

  // Sweets
  { id: 31, name: 'Gulab Jamun', description: 'Sweet Gulab Jamun', price: 100, image: '/images/gulab.jpg', category: 'sweets' },
  { id: 32, name: 'Jalebi', description: 'Crispy Jalebi', price: 80, image: '/images/jalebi.jpg', category: 'sweets' },
  { id: 33, name: 'Ladoo', description: 'Sweet Ladoos', price: 120, image: '/images/ladoo.jpg', category: 'sweets' },
  { id: 34, name: 'Barfi', description: 'Creamy Barfi', price: 150, image: '/images/barfi.jpg', category: 'sweets' },
  { id: 35, name: 'Kheer', description: 'Delicious Kheer', price: 100, image: '/images/kheer.jpg', category: 'sweets' },
  { id: 36, name: 'Rasgulla', description: 'Sweet Rasgulla', price: 90, image: '/images/rasgulla.jpg', category: 'sweets' },
  { id: 37, name: 'Peda', description: 'Soft Peda', price: 70, image: '/images/peda.jpg', category: 'sweets' },
  { id: 38, name: 'Soan Papdi', description: 'Flaky Soan Papdi', price: 80, image: '/images/soanpapdi.jpg', category: 'sweets' },
  { id: 39, name: 'Chum Chum', description: 'Sweet Chum Chum', price: 90, image: '/images/chumchum.jpg', category: 'sweets' },
  { id: 40, name: 'Petha', description: 'Sweet Petha', price: 60, image: '/images/petha.jpg', category: 'sweets' },
];


const ProductList = ({ category }) => {
    const filteredProducts = products.filter(product => product.category === category);

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

const ProductItem = ({ product }) => {
    const [count, setCount] = useState(0);

    const handleAddToCart = () => {
        setCount(1);
    };

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount(prevCount => {
            if (prevCount === 1) return 0;
            return prevCount - 1;
        });
    };

    return (
        <div className="product-item">
            <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>

            {count === 0 ? (
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            ) : (
                <div className="counter-container">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                </div>
            )}
        </div>
    );
};

export default ProductList;
