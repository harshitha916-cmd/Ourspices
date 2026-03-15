import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <h2>Fresh & Natural Spices</h2>
        <p>Bringing the best spices straight to your kitchen!</p>
        <button onClick={() => navigate('/products')}>Shop Now</button>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <div className="cards">
          <div className="card">🧄 Garlic Powder</div>
          <div className="card">🌿 Turmeric</div>
          <div className="card">🌶️ Red Chilli</div>
          <div className="card">🫚 Cumin Seeds</div>
        </div>
      </section>

      <footer>
        <p>© 2026 OurSpices. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;