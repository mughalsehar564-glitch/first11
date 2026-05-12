import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock } from 'react-icons/fa';

const ContactLocation = () => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hello AA Men's Wear! I found you online and I'd like to place an order. Please assist me.");
    window.open(`https://wa.me/923000000000?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:0300-0000000');
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about your products.");
    window.open(`https://wa.me/923000000000?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="contact-location">
      <div className="container">
        <div className="contact-grid">
          <div className="map-container">
            <div className="map-frame">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.6%2C31.1%2C72.7%2C31.2&layer=mapnik&marker=31.149001%2C72.6830998"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                title="AA Men's Wear Store Location"
              />
            </div>
          </div>

          <div className="contact-info">
            <h2 className="contact-title">Find & Reach Us</h2>
            
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-details">
                  <div className="contact-label">Address</div>
                  <div className="contact-value">Gojra, Punjab, Pakistan</div>
                </div>
              </div>

              <div className="contact-card" onClick={handleCall}>
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-details">
                  <div className="contact-label">Phone</div>
                  <div className="contact-value contact-link">0300-0000000</div>
                </div>
              </div>

              <div className="contact-card" onClick={handleWhatsAppChat}>
                <div className="contact-icon"><FaWhatsapp /></div>
                <div className="contact-details">
                  <div className="contact-label">WhatsApp</div>
                  <div className="contact-value contact-link">0300-0000000</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon"><FaClock /></div>
                <div className="contact-details">
                  <div className="contact-label">Hours</div>
                  <div className="contact-value">
                    Mon–Sat 10:00 AM – 9:00 PM<br />
                    Sunday 12:00 PM – 7:00 PM
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
