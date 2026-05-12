import React, { useState } from 'react';
import { products } from '../data/products';

const OrderForm = ({ isOpen, onClose, selectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    quantity: 1,
    specialInstructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedProductItem, setSelectedProductItem] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate order submission
    setTimeout(() => {
      setSubmitMessage(`Order placed successfully! We will contact you soon.`);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          quantity: 1,
          specialInstructions: ''
        });
        setSubmitMessage('');
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="order-form-overlay">
      <div className="order-form-modal">
        <div className="order-form-header">
          <h2>Place Your Order</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        {selectedProduct && (
          <div className="selected-product-display">
            <div className="product-info">
              <div className="product-label">Ordering Product</div>
              <div className="product-name">{selectedProduct}</div>
            </div>
            <div className="product-badge">Premium</div>
          </div>
        )}
        
        <div className="order-form-content">
                    
          {submitMessage ? (
            <div className="success-message">
              {submitMessage}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="order-form-fields">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity *</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="specialInstructions">Special Instructions (Optional)</label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  rows="3"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  placeholder="Any special requests or delivery instructions..."
                />
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;