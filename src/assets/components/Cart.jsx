import React from 'react';
import { useCart } from '../contexts/CartContext';
import { FaTimes, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = ({ setIsOrderFormOpen, setSelectedProduct }) => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    // Close cart first
    setIsCartOpen(false);
    // Then open order form
    setSelectedProduct('Cart Order');
    setIsOrderFormOpen(true);
  };


  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={handleClose}></div>
      )}
      
      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">PKR {item.price}</p>
                      <div className="cart-item-quantity">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <button 
                      className="cart-item-remove"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>PKR {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="cart-actions">
                  <button 
                    className="btn btn-ghost"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={handlePlaceOrder}
                    disabled={cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
