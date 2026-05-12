import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

const PremiumProductCards = ({ setIsOrderFormOpen, setSelectedProduct }) => {
  const [watchCardTilt, setWatchCardTilt] = useState({ x: 0, y: 0 });
  const [sunglassesCardTilt, setSunglassesCardTilt] = useState({ x: 0, y: 0 });
  const watchCardRef = useRef(null);
  const sunglassesCardRef = useRef(null);
  const { addToCart } = useCart();

  const handleMouseMove = (e, cardRef, setTilt) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = (setTilt) => {
    setTilt({ x: 0, y: 0 });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleBuyNow = (productName) => {
    setSelectedProduct(productName);
    setIsOrderFormOpen(true);
  };

  return (
    <section className="premium-products-section">
      <div className="container">
        <div className="premium-cards-grid">
          
          {/* Luxury Watch Card */}
          <div 
            className="premium-card watch-card"
            ref={watchCardRef}
            onMouseMove={(e) => handleMouseMove(e, watchCardRef, setWatchCardTilt)}
            onMouseLeave={() => handleMouseLeave(setWatchCardTilt)}
            style={{
              transform: `perspective(1000px) rotateX(${watchCardTilt.x}deg) rotateY(${watchCardTilt.y}deg)`,
            }}
          >
            <div className="card-glassmorphism">
              <div className="card-shine-overlay"></div>
              
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format" 
                  alt="Luxury Watch" 
                  className="card-image"
                />
                <div className="card-badge best-seller">Best Seller</div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Swiss Luxury Watch</h3>
                
                <div className="card-rating">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">(4.9/5)</span>
                </div>
                
                <div className="card-price-container">
                  <span className="card-price">$2,499</span>
                  <span className="card-original-price">$3,299</span>
                </div>
                
                <div className="card-buttons">
                  <button 
                    className="card-btn buy-now-btn"
                    onClick={() => handleBuyNow('Swiss Luxury Watch')}
                  >
                    <span className="btn-text">Buy Now</span>
                    <span className="btn-icon">⚡</span>
                  </button>
                  <button 
                    className="card-btn add-to-cart-btn"
                    onClick={() => handleAddToCart({
                      id: 'watch-1',
                      name: 'Swiss Luxury Watch',
                      price: 2499,
                      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format'
                    })}
                  >
                    <span className="btn-text">Add to Cart</span>
                    <span className="btn-icon">🛒</span>
                  </button>
                </div>
              </div>
              
              <div className="card-neon-glow"></div>
            </div>
          </div>

          {/* Sunglasses Card */}
          <div 
            className="premium-card sunglasses-card"
            ref={sunglassesCardRef}
            onMouseMove={(e) => handleMouseMove(e, sunglassesCardRef, setSunglassesCardTilt)}
            onMouseLeave={() => handleMouseLeave(setSunglassesCardTilt)}
            style={{
              transform: `perspective(1000px) rotateX(${sunglassesCardTilt.x}deg) rotateY(${sunglassesCardTilt.y}deg)`,
            }}
          >
            <div className="card-glassmorphism sunglasses-glass">
              <div className="card-shine-overlay"></div>
              
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&auto=format" 
                  alt="Men's Sunglasses" 
                  className="card-image"
                />
                <div className="card-badge trending">Trending</div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Premium Aviator Sunglasses</h3>
                
                <div className="card-rating">
                  <div className="stars">★★★★☆</div>
                  <span className="rating-text">(4.7/5)</span>
                </div>
                
                <div className="card-price-container">
                  <span className="card-price">$189</span>
                </div>
                
                <div className="card-buttons">
                  <button 
                    className="card-btn buy-now-btn"
                    onClick={() => handleBuyNow('Premium Aviator Sunglasses')}
                  >
                    <span className="btn-text">Buy Now</span>
                    <span className="btn-icon">⚡</span>
                  </button>
                  <button 
                    className="card-btn add-to-cart-btn"
                    onClick={() => handleAddToCart({
                      id: 'sunglasses-1',
                      name: 'Premium Aviator Sunglasses',
                      price: 189,
                      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop&auto=format'
                    })}
                  >
                    <span className="btn-text">Add to Cart</span>
                    <span className="btn-icon">🛒</span>
                  </button>
                </div>
              </div>
              
              <div className="card-glowing-border"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PremiumProductCards;
