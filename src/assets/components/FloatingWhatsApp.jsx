import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I found AA Men's Wear Store online. I'm interested in your products!");
    window.open(`https://wa.me/923000000000?text=${message}`, '_blank');
  };

  return (
    <div 
      className="floating-whatsapp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleWhatsAppClick}
    >
      <div className={`whatsapp-tooltip ${showTooltip ? 'show' : ''}`}>
        Chat with us!
      </div>
      <div className="whatsapp-icon">
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
