import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [counters, setCounters] = useState({ products: 0, years: 0, clients: 0 });
  const [productCount, setProductCount] = useState(0);
  const [watchCardTilt, setWatchCardTilt] = useState({ x: 0, y: 0 });
  const [sunglassesCardTilt, setSunglassesCardTilt] = useState({ x: 0, y: 0 });
  const watchCardRef = useRef(null);
  const sunglassesCardRef = useRef(null);

  const handleMouseMove = (e, cardRef, setTilt) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = (setTilt) => {
    setTilt({ x: 0, y: 0 });
  };


  useEffect(() => {
    const targetValues = { products: 500, years: 6, clients: 1000 };
    const duration = 8000; // Much slower animation - 8 seconds
    const steps = 200; // Even more steps for ultra-smooth animation
    const increments = {
      products: targetValues.products / steps,
      years: targetValues.years / steps,
      clients: targetValues.clients / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        products: Math.min(Math.floor(increments.products * currentStep), targetValues.products),
        years: Math.min(Math.floor(increments.years * currentStep), targetValues.years),
        clients: Math.min(Math.floor(increments.clients * currentStep), targetValues.clients)
      });
      setProductCount(Math.min(Math.floor(increments.products * currentStep), targetValues.products));
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated Particles */}
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-label">PREMIUM LUXURY ACCESSORIES</div>
            <div className="hero-title-container">
              <img src="/logo.jpeg" alt="AA Men's Wear" className="hero-logo-bg" />
              <h1 className="hero-title">
                Luxury Accessories<br />For Modern Men
              </h1>
            </div>
                        
            {/* Mobile-first layout: Product cards and stats above buttons */}
            <div className="hero-mobile-elements">
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">{counters.products}+</div>
                  <div className="stat-label">Products</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{counters.years}+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{counters.clients}+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Mobile Cards Above Buttons */}
            <div className="hero-mobile-cards">
              <div className="hero-simple-card">
                <img 
                  src="/watch1.jpg" 
                  alt="Luxury Watch" 
                  className="hero-simple-card-image"
                />
              </div>
              <div className="hero-simple-card hero-simple-card-3d">
                <img 
                  src="/sun1.jpg" 
                  alt="Sunglasses" 
                  className="hero-simple-card-image"
                />
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary btn-large"
              >
                Shop Collection →
              </button>
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="btn btn-ghost btn-large"
              >
                Contact Us →
              </button>
            </div>
          </div>
          
          {/* Right Side Cards - Desktop Only */}
          <div className="hero-right">
            <div className="hero-simple-card">
              <img 
                src="/watch1.jpg" 
                alt="Luxury Watch" 
                className="hero-simple-card-image"
              />
            </div>
            <div className="hero-simple-card hero-simple-card-3d">
              <img 
                src="/sun1.jpg" 
                alt="Sunglasses" 
                className="hero-simple-card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
