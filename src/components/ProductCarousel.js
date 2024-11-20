import React, { useState } from 'react';
import './ProductCarousel.css';

const products = [
  { id: 1, name: 'FORCE 1', image: 'shoe1.png' },
  { id: 2, name: 'AIR JORDAN 1', image: 'shoe6.png' },
  { id: 3, name: 'CORTEZ', image: 'shoe8.png' },
  { id: 4, name: 'KILLSHOT', image: 'shoe4.png' },
  { id: 5, name: 'PEGASUS 41', image: 'shoe5.png' },
  { id: 6, name: 'AIR MAX', image: 'shoe6.png' },
  { id: 7, name: 'DUNK LOW', image: 'shoe7.png' },
  { id: 8, name: 'BLAZER', image: 'shoe8.png' },
  { id: 9, name: 'METCON', image: 'shoe9.png' },
];

function ProductCarousel() {
  // 创建三倍长度的数组，确保无缝循环
  const extendedProducts = [...products, ...products, ...products];
  const [currentIndex, setCurrentIndex] = useState(products.length); // 从中间组开始
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // 当滚动到第三组开始时，无动画地重置到第二组开始
    if (currentIndex >= products.length * 2) {
      setCurrentIndex(products.length);
    }
    // 当滚动到第一组结束时，无动画地重置到第二组结束
    if (currentIndex < products.length) {
      setCurrentIndex(products.length * 2 - 1);
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const isItemInCenter = (index) => {
    // 计算在当前视图中的位置
    const visiblePosition = index - currentIndex;
    // 由于我们显示5个项目，中间位置应该是第3个（索引2）
    return visiblePosition === 2;
  };

  // 计算当前展示的实际索引（用于显示正确的序号）
  const getCurrentIndex = (index) => {
    const actualIndex = index % products.length;
    return actualIndex + 1;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Our Renew Shoes</h2>
        <div className="carousel-tags">
          <span className="tag hot">HOT</span>
          <span className="tag trending">TRENDING</span>
        </div>
      </div>
      <div className="carousel-wrapper">
        <button className="carousel-button prev" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="carousel-content">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(calc(-${currentIndex * 20}% - ${currentIndex * 20}px))`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="carousel-item">
                {isItemInCenter(index) && (
                  <div className="item-number">
                    {getCurrentIndex(index)}/{products.length}
                  </div>
                )}
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel; 