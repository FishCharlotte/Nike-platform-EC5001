import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import ProductShowcase from '../components/ProductShowcase';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      
      <div className="hero-section">
        <h1>Nike 品質保證。</h1>
        <p>購買認證的翻新產品，享受一年保固服務以及 Nike 認證的翻新產品卓越品質承諾</p>
        <div className="button-group">
          <button onClick={() => navigate('/buy')} className="primary-button">
            Buy Now
          </button>
          <button onClick={() => navigate('/recycle')} className="secondary-button">
            Recycle Now
          </button>
        </div>
        <a href="#learn-more" className="learn-more">進一步了解</a>
      </div>

      <div className="ad-banner">
        <img src="/ad.png" alt="Advertisement" className="ad-image" />
      </div>
      
      <ProductCarousel />
      <ProductShowcase />
      
    
    </div>
  );
}

export default Home; 