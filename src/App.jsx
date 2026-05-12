import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';

// Components
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import ProductCategories from './assets/components/ProductCategories';
import FeaturedProducts from './assets/components/FeaturedProducts';
import WhyChooseUs from './assets/components/WhyChooseUs';
import CustomerReviews from './assets/components/CustomerReviews';
import ContactLocation from './assets/components/ContactLocation';
import Footer from './assets/components/Footer';
import Cart from './assets/components/Cart';
import OrderForm from './assets/components/OrderForm';

// Context
import { CartProvider } from './assets/contexts/CartContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('section, .category-card, .product-card, .feature-card, .review-card');
      elements.forEach((element) => observer.observe(element));
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <CartProvider>
      <div className="App">
        {/* Loading Screen */}
        {loading && (
          <div className={`loading-screen ${!loading ? 'hide' : ''}`}>
            <div className="loading-content">
              <img src="/logo.jpeg" alt="AA Men's Wear" className="loading-logo" />
              <div className="loading-welcome-text">Welcome to AA Men's Store</div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="main-content">
          <Navbar />
          <Hero />
          <ProductCategories />
          <FeaturedProducts 
            setIsOrderFormOpen={setIsOrderFormOpen}
            setSelectedProduct={setSelectedProduct}
          />
          <WhyChooseUs />
          <CustomerReviews/>
          <ContactLocation />
          <Footer />
          <Cart 
            setIsOrderFormOpen={setIsOrderFormOpen}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
        
        {/* Order Form Modal */}
        <OrderForm 
          isOpen={isOrderFormOpen}
          onClose={() => setIsOrderFormOpen(false)}
          selectedProduct={selectedProduct}
        />
      </div>
    </CartProvider>
  );
}

export default App;