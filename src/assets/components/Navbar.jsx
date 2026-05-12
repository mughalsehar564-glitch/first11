import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'COLLECTION', 'QUALITY', 'REVIEWS', 'LOCATION'];
  
  const scrollToSection = (section) => {
    if (section === 'WATCHES' || section === 'BRACELETS' || section === 'SUNGLASSES') {
      // Scroll to featured products section and set filter
      const featuredElement = document.getElementById('featured');
      if (featuredElement) {
        featuredElement.scrollIntoView({ behavior: 'smooth' });
        
        // Set the active filter after scrolling
        setTimeout(() => {
          const categoryMap = {
            'WATCHES': 'watch',
            'BRACELETS': 'bracelet', 
            'SUNGLASSES': 'sunglasses'
          };
          
          const filterBtn = document.querySelector(`.filter-btn[data-category="${categoryMap[section]}"]`);
          if (filterBtn) {
            filterBtn.click();
          }
        }, 800);
      }
    } else if (section === 'QUALITY') {
      const element = document.getElementById('why-choose-us');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'LOCATION') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <div className="logo-main">AA</div>
            <div className="logo-sub">MEN'S WEAR</div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="nav-link"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="nav-buttons">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="btn btn-ghost cart-btn"
            >
              <FaShoppingCart /> Add to Cart
              {getCartCount() > 0 && (
                <span className="cart-count">{getCartCount()}</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="mobile-nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link}
            </button>
          ))}
          
          {/* Mobile Cart Button */}
          <button 
            onClick={() => {
              setIsCartOpen(true);
              setMobileMenuOpen(false);
            }}
            className="mobile-nav-link mobile-cart-btn"
            style={{ animationDelay: `${navLinks.length * 0.1}s` }}
          >
            <FaShoppingCart /> Add to Cart
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
