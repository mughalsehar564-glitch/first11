import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const FeaturedProducts = ({ setIsOrderFormOpen, setSelectedProduct }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [productsVisible, setProductsVisible] = useState(true);
  const [addedToCart, setAddedToCart] = useState({});
  const { addToCart } = useCart();

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setProductsVisible(false);
    setTimeout(() => setProductsVisible(true), 100);
  };


  const handleAddToCart = (product) => {
    // Convert price string to number
    const productToAdd = {
      ...product,
      price: parseFloat(product.price.replace(',', ''))
    };
    addToCart(productToAdd);
    
    // Show "Added" feedback
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    
    // Reset after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleBuyNow = (productName) => {
    setSelectedProduct(productName);
    setIsOrderFormOpen(true);
  };

  useEffect(() => {
    setProductsVisible(true);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + ` ${rating}`;
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="featured" className="featured-products">
      <div className="container">
        <div className="section-header">
          <div className="section-label">FEATURED PIECES</div>
          <h2 className="section-title">Premium Collection</h2>
          <div className="section-line"></div>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'watch' ? 'active' : ''}`}
            onClick={() => handleFilterChange('watch')}
            data-category="watch"
          >
            Watches
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'bracelet' ? 'active' : ''}`}
            onClick={() => handleFilterChange('bracelet')}
            data-category="bracelet"
          >
            Bracelets
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'sunglasses' ? 'active' : ''}`}
            onClick={() => handleFilterChange('sunglasses')}
            data-category="sunglasses"
          >
            Sunglasses
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="product-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(30px)',
                animation: `slideInUp 0.6s ease ${index * 0.1}s forwards`
              }}
            >
              <div className="product-image-container">
                <div className="product-badge">{product.badge}</div>
                <img 
                  src={product.image.startsWith('/') ? product.image : `https://source.unsplash.com/300x240/?${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">{renderStars(product.rating)}</span>
                </div>
                <div className="product-price-container">
                  <span className="product-price">{product.price}</span>
                  <span className="product-original-price">{product.originalPrice}</span>
                </div>
                <div className="product-actions">
                  <button 
                    className="btn-buy-now"
                    onClick={() => handleBuyNow(product.name)}
                  >
                    Buy Now
                  </button>
                  <button 
                    className="btn-add-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedToCart[product.id] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

