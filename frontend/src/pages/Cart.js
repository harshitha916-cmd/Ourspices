import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Order placed successfully! 🎉 Thank you for shopping with OurSpices!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty! 😢</p>
          <button onClick={() => navigate('/products')}>Shop Now</button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <span className="cart-emoji">{item.emoji}</span>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>{item.weight}</p>
                </div>
                <div className="cart-price">
                  <p>₹{item.price} x {item.quantity}</p>
                  <p className="subtotal">₹{item.price * item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
            <p className="total-price">Total: ₹{totalPrice}</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout 🚀
            </button>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;