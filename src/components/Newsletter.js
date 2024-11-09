// src/components/Newsletter.js
import React, { useState } from 'react';
// import './Newsletter.css'; // Assuming you create this file for styling

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Subscribed successfully!');
    setEmail('');
  };

  return (
    <div className="newsletter">
      <span>Subscribe Us</span>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
