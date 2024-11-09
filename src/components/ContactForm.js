// src/components/ContactForm.js
import React, { useState } from 'react';
// import './ContactForm.css'; // Assuming you create this file for styling

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      city: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Get a Free Consultation</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Area, City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <button type="submit">Get Quick Quote</button>
      </form>
    </div>
  );
}

export default ContactForm;
