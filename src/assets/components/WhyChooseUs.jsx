import React, { useEffect, useRef } from 'react';
import { FaGlobe, FaAward, FaTruck, FaGem } from 'react-icons/fa';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  const features = [
    {
      icon: <FaGlobe />,
      title: 'Imported Products',
      description: 'Sourced from international luxury markets. Every product is carefully curated.'
    },
    {
      icon: <FaAward />,
      title: 'Premium Quality',
      description: 'Rigorous quality checks on every single item before it reaches you.'
    },
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Same-day delivery in Gojra. Swift shipping across all of Pakistan.'
    },
    {
      icon: <FaGem />,
      title: 'Affordable Luxury',
      description: 'World-class style that doesn\'t demand a world-class budget.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <div className="section-label">THE AA DIFFERENCE</div>
          <h2 className="section-title">Why Thousands Trust Us</h2>
          <div className="section-line"></div>
        </div>

        <div className="features-grid" ref={containerRef}>
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon-bg"></div>
                <div className="feature-icon" style={{ color: '#c1121f' }}>
                  {feature.icon}
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-decoration"></div>
            </div>
          ))}
        </div>
        
        {/* Background decorative elements */}
        <div className="why-choose-bg-decoration">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
