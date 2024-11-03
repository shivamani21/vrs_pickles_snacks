// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductSection />
      <main className="product-listings">
        <section id="nonveg" className="product-category">
          <h2>Non-Veg Pickles</h2>
          <ProductList category="nonveg" />
        </section>
        <section id="veg" className="product-category">
          <h2>Veg Pickles</h2>
          <ProductList category="veg" />
        </section>
        <section id="snacks" className="product-category">
          <h2>Snacks</h2>
          <ProductList category="snacks" />
        </section>
        <section id="sweets" className="product-category">
          <h2>Sweets</h2>
          <ProductList category="sweets" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
