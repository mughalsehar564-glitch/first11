import React, { useEffect, useRef } from 'react';

const ProductCategories = () => {
  const containerRef = useRef(null);

  const categories = [
    {
      name: 'WATCHES',
      tagline: 'Time, Elevated',
      image: 'watch4.jpg'
    },
    {
      name: 'BRACELETS',
      tagline: 'Worn to Impress',
      image: 'baracelet2.jpg'
    },
    {
      name: 'SUNGLASSES',
      tagline: 'See the World Differently',
      image: 'sun2.jpg'
    }
  ];

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.category-card');
    if (!cards) return;

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="collection" className="product-categories">
      <div className="container">
        <div className="section-header">
          <div className="section-label">OUR COLLECTIONS</div>
          <h2 className="section-title">Explore the Finest</h2>
          <div className="section-line"></div>
        </div>

        <div className="categories-grid" ref={containerRef}>
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="category-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="category-image-container">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-tagline">{category.tagline}</p>
                <div className="category-line"></div>
                {/* <button className="category-link">
                  View Collection →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
