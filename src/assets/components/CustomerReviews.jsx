import React, { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayedTexts, setDisplayedTexts] = useState(['', '']);
  const [charIndexes, setCharIndexes] = useState([0, 0]);
  const reviews = [
    {
      text: "Ordered a watch and received it within 2 hours. The quality is beyond what I expected at this price. Highly recommend!",
      author: "Muhammad Ali",
      city: "Gojra",
      rating: 5,
      avatar: "https://picsum.photos/seed/man1/100/100.jpg"
    },
    {
      text: "The bracelet I got is stunning. People keep asking where I bought it. AA Men's Wear is the real deal.",
      author: "Ahmed Raza",
      city: "Faisalabad",
      rating: 5,
      avatar: "https://picsum.photos/seed/man2/100/100.jpg"
    },
    {
      text: "Best sunglasses I've owned. Original quality, fast response on WhatsApp. Will order again.",
      author: "Usman Tariq",
      city: "Lahore",
      rating: 5,
      avatar: "https://picsum.photos/seed/man3/100/100.jpg"
    },
    {
      text: "Amazing collection of watches! The customer service is exceptional and the delivery was super fast. Very satisfied!",
      author: "Bilal Khan",
      city: "Karachi",
      rating: 5,
      avatar: "https://picsum.photos/seed/man4/100/100.jpg"
    }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Typing effect functionality for 2 reviews
  useEffect(() => {
    if (isPaused) return;
    
    const currentReview1 = reviews[currentIndex];
    const currentReview2 = reviews[(currentIndex + 1) % reviews.length];
    
    const timeout = setTimeout(() => {
      setDisplayedTexts(prev => {
        const newTexts = [...prev];
        
        // Type first review
        if (charIndexes[0] < currentReview1.text.length) {
          newTexts[0] = prev[0] + currentReview1.text[charIndexes[0]];
          setCharIndexes(prev => [prev[0] + 1, prev[1]]);
        }
        
        // Type second review with slight delay
        if (charIndexes[0] > 10 && charIndexes[1] < currentReview2.text.length) {
          newTexts[1] = prev[1] + currentReview2.text[charIndexes[1]];
          setCharIndexes(prev => [prev[0], prev[1] + 1]);
        }
        
        // Check if both reviews are complete
        if (charIndexes[0] >= currentReview1.text.length && 
            charIndexes[1] >= currentReview2.text.length) {
          // Reset for next reviews after delay
          setTimeout(() => {
            setCurrentIndex((prevIndex) => 
              prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
            setDisplayedTexts(['', '']);
            setCharIndexes([0, 0]);
          }, 3000);
        }
        
        return newTexts;
      });
    }, 50); // Typing speed
    
    return () => clearTimeout(timeout);
  }, [currentIndex, charIndexes, isPaused]);

  return (
    <section id="reviews" className="customer-reviews">
      <div className="container">
        <div className="section-header">
          <div className="section-label">CLIENT STORIES</div>
          <h2 className="section-title">Real Words, Real Style</h2>
          <div className="section-line"></div>
        </div>

        <div className="reviews-typing">
          <div 
            className="typing-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="reviews-grid-2">
              {/* First Review */}
              <div className="review-card">
                <div className="review-quote">❝</div>
                <p className="review-text typing-text">
                  {displayedTexts[0]}
                  <span className="typing-cursor">|</span>
                </p>
                <div className="review-rating">
                  {'★'.repeat(reviews[currentIndex].rating)}
                </div>
                <div className="review-author">
                  <div className="author-avatar">
                    <img 
                      src={reviews[currentIndex].avatar} 
                      alt={reviews[currentIndex].author}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="author-avatar-fallback">
                      {getInitials(reviews[currentIndex].author)}
                    </div>
                  </div>
                  <div className="author-info">
                    <div className="author-name">{reviews[currentIndex].author}</div>
                    <div className="author-city">{reviews[currentIndex].city}</div>
                  </div>
                </div>
              </div>

              {/* Second Review */}
              <div className="review-card">
                <div className="review-quote">❝</div>
                <p className="review-text typing-text">
                  {displayedTexts[1]}
                  <span className="typing-cursor">|</span>
                </p>
                <div className="review-rating">
                  {'★'.repeat(reviews[(currentIndex + 1) % reviews.length].rating)}
                </div>
                <div className="review-author">
                  <div className="author-avatar">
                    <img 
                      src={reviews[(currentIndex + 1) % reviews.length].avatar} 
                      alt={reviews[(currentIndex + 1) % reviews.length].author}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="author-avatar-fallback">
                      {getInitials(reviews[(currentIndex + 1) % reviews.length].author)}
                    </div>
                  </div>
                  <div className="author-info">
                    <div className="author-name">{reviews[(currentIndex + 1) % reviews.length].author}</div>
                    <div className="author-city">{reviews[(currentIndex + 1) % reviews.length].city}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typing Indicators */}
          <div className="typing-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`typing-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setDisplayedTexts(['', '']);
                  setCharIndexes([0, 0]);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
