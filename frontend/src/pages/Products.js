import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

const spices = [
  { id: 1, name: 'Garlic Powder', price: 99, emoji: '🧄', weight: '100g' },
  { id: 2, name: 'Turmeric', price: 79, emoji: '🌿', weight: '200g' },
  { id: 3, name: 'Red Chilli', price: 89, emoji: '🌶️', weight: '100g' },
  { id: 4, name: 'Cumin Seeds', price: 109, emoji: '🫚', weight: '150g' },
  { id: 5, name: 'Black Pepper', price: 149, emoji: '🫙', weight: '100g' },
  { id: 6, name: 'Coriander', price: 69, emoji: '🌱', weight: '200g' },
  { id: 7, name: 'Cardamom', price: 199, emoji: '🟢', weight: '50g' },
  { id: 8, name: 'Cinnamon', price: 129, emoji: '🪵', weight: '100g' },
  { id: 9, name: 'Mustard Seeds', price: 59, emoji: '🟡', weight: '200g' },
  { id: 10, name: 'Fenugreek', price: 79, emoji: '🌾', weight: '150g' },
  { id: 11, name: 'Cloves', price: 179, emoji: '🌰', weight: '50g' },
  { id: 12, name: 'Bay Leaves', price: 49, emoji: '🍃', weight: '20g' },
];

function Products() {
  const { addToCart } = useCart();
  const [message, setMessage] = useState('');

  const handleAddToCart = (spice) => {
    addToCart(spice);
    setMessage(`${spice.name} added to cart! 🛒`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="products-page">
      <h2>🌶️ Our Products</h2>
      <p className="subtitle">Fresh & Natural Spices delivered to your kitchen!</p>

      {message && <div className="toast">{message}</div>}

      <div className="products-grid">
        {spices.map(spice => (
          <div className="product-card" key={spice.id}>
            <div className="product-emoji">{spice.emoji}</div>
            <h3>{spice.name}</h3>
            <p className="weight">{spice.weight}</p>
            <p className="price">₹{spice.price}</p>
            <button onClick={() => handleAddToCart(spice)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;