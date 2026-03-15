import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email, password
      });
      localStorage.setItem('token', response.data.token);
      setMessage(response.data.message);
      navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="auth-container">
      <h1>🌶️ OurSpices</h1>
      <h2>Welcome Back!</h2>
      <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      <p className="message">{message}</p>
    </div>
  );
}

export default Login;