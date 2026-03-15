import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name, email, password
      });
      setMessage(response.data.message);
      navigate('/login');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="auth-container">
      <h1>🌶️ OurSpices</h1>
      <h2>Create Account</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account? <a href="/login">Login</a></p>
      <p className="message">{message}</p>
    </div>
  );
}

export default Signup;