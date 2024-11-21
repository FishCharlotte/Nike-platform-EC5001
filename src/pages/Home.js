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
        <h1>Nike 品質保證 | Nike Quality Guarantee</h1>
        <p>
          購買認證的翻新產品，享受一年保固服務以及 Nike 認證的翻新產品卓越品質承諾 | 
          Purchase certified refurbished products and enjoy one-year warranty service and Nike's commitment to excellence
        </p>
        <div className="button-group">
          <button onClick={() => navigate('/buy')} className="primary-button">
            立即購買 | Buy Now
          </button>
          <button onClick={() => navigate('/recycle')} className="secondary-button">
            立即回收 | Recycle Now
          </button>
        </div>
        <a href="#learn-more" className="learn-more">
          進一步了解 | Learn More
        </a>
      </div>

      <div className="ad-banner">
        <img src="ad.png" alt="Advertisement" className="ad-image" />
      </div>
      
      <ProductCarousel />
      <ProductShowcase />
      
    
    </div>
  );
}

export default Home; 