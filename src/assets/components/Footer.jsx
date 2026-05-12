import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Collection', section: 'collection' },
    { name: 'Watches', section: 'featured' },
    { name: 'Bracelets', section: 'featured' },
    { name: 'Sunglasses', section: 'featured' },
    { name: 'Contact', section: 'contact' }
  ];

  const categoryLinks = [
    'Men\'s Watches',
    'Luxury Bracelets',
    'Premium Sunglasses',
    'New Arrivals',
    'Best Sellers'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'TikTok', icon: <FaTiktok /> }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column">
            <div className="footer-brand">
              <div className="footer-logo">AA</div>
              <div className="footer-subtitle">MEN'S WEAR</div>
            </div>
            <p className="footer-tagline">
              Premium accessories for the modern Pakistani man.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href="#"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-column">
            <h3 className="footer-heading">NAVIGATION</h3>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="footer-column">
            <h3 className="footer-heading">SHOP</h3>
            <ul className="footer-links">
              {categoryLinks.map((category) => (
                <li key={category}>
                  <button className="footer-link">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-heading">CONTACT US</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon"><FaMapMarkerAlt /></span>
                Gojra, Punjab, Pakistan
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaPhone /></span>
                0300-0000000
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaWhatsapp /></span>
                WhatsApp: 0300-0000000
              </div>
              <div className="contact-item">
                <span className="contact-icon"><FaEnvelope /></span>
                aa.menswear@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            © 2026 AA Men's Wear Store. All Rights Reserved.
          </div>
          <div className="footer-bottom-right">
            Designed by Sehar <FaHeart /> in Samundri, Pakistan.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
