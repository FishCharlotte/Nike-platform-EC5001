import React from 'react';
import './ProductShowcase.css';

function ProductShowcase() {
  const categories = [
    { id: 1, name: 'Lifestyle' },
    { id: 2, name: 'Skateboarding' },
    { id: 3, name: 'Nike By You' },
    { id: 4, name: 'Gender', hasSubmenu: true },
    { id: 5, name: 'Kids', hasSubmenu: true },
    { id: 6, name: 'Shop By Price', hasSubmenu: true },
    { id: 7, name: 'Sale & Offers', hasSubmenu: true },
    { id: 8, name: 'Colour', hasSubmenu: true },
    { id: 9, name: 'Collections (1)', hasSubmenu: true },
    { id: 10, name: 'Shoe Height', hasSubmenu: true },
    { id: 11, name: 'Features', hasSubmenu: true },
    { id: 12, name: 'Brand', hasSubmenu: true },
  ];

  const products = [
    {
      id: 1,
      name: 'Nike Dunk Low Retro',
      category: "Men's Shoe",
      colors: 3,
      price: 165,
      image: 'shoe1.png',
      isBestseller: true
    },
    {
      id: 2,
      name: 'Nike Dunk Low',
      category: "Women's Shoes",
      colors: 4,
      price: 165,
      image: 'shoe2.png'
    },
    {
      id: 3,
      name: 'Nike Dunk Low',
      category: "Younger Kids' Shoes",
      colors: 1,
      price: 99,
      image: 'shoe3.png'
    },
    {
      id: 4,
      name: 'Nike Dunk Low Premium',
      category: "Men's Shoe",
      colors: 3,
      price: 165,
      image: 'shoe4.png',
      isBestseller: true
    },
    {
      id: 5,
      name: 'Nike Dunk High',
      category: "Women's Shoes",
      colors: 4,
      price: 165,
      image: 'shoe5.png'
    },
    {
      id: 6,
      name: 'Nike Dunk SB',
      category: "Skateboarding Shoes",
      colors: 2,
      price: 189,
      image: 'shoe6.png'
    },
    {
      id: 7,
      name: 'Nike Dunk Retro SE',
      category: "Men's Shoe",
      colors: 3,
      price: 175,
      image: 'shoe7.png',
      isBestseller: true
    },
    {
      id: 8,
      name: 'Nike Dunk Low Next Nature',
      category: "Women's Shoes",
      colors: 2,
      price: 155,
      image: 'shoe8.png'
    },
    {
      id: 9,
      name: 'Nike Dunk High Retro',
      category: "Men's Shoes",
      colors: 1,
      price: 179,
      image: 'shoe9.png'
    },
  ];

  return (
    <div className="product-showcase">
      <div className="showcase-header">
        <div className="breadcrumb">
          <span>Shoes</span> / <span>Nike Dunk</span>
        </div>
        <div className="showcase-title">
          <h1>Nike Dunk Shoes (82)</h1>
          <div className="showcase-controls">
            <button className="filter-button">
              Hide Filters
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <button className="sort-button">
              Sort By
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="showcase-content">
        <aside className="sidebar">
          {categories.map(category => (
            <div key={category.id} className="category-item">
              {category.name}
              {category.hasSubmenu && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              )}
            </div>
          ))}
        </aside>
        
        <main className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.isBestseller && <span className="bestseller-tag">Bestseller</span>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-colors">{product.colors} Colours</p>
                <p className="product-price">HKD ${product.price}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProductShowcase; 