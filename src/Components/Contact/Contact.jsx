import React, { useState } from 'react';
"use client";

import { Button } from "flowbite-react";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div style={{ 
        maxWidth: '400px', // Reduced max width
        margin: '0 auto', 
        padding: '15px', // Reduced padding
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
        borderRadius: '10px', // Rounding corners
        marginTop:'50px'
      }}>
      <h1 style={{ color: '#ff66b3', textAlign: 'center', fontSize: '30px' }}>Contact Me</h1>
      <p style={{ textAlign: 'center', fontSize: '16px' }}>
        If you have any questions, feel free to reach out.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <label htmlFor="name" style={{ fontSize: '16px' }}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '8px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ddd' }}
          required
        />

        <label htmlFor="email" style={{ fontSize: '16px' }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '8px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ddd' }}
          required
        />

        <label htmlFor="message" style={{ fontSize: '16px' }}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '8px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ddd', height: '100px' }} // Reduced height
          required
        ></textarea>

        {/* <button
          type="submit"
          style={{
            padding: '8px 15px', // Adjusted padding
            backgroundColor: '#ff66b3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px', // Reduced font size
            cursor: 'pointer'
          }}
        >
          Send
        </button> */}

<Button gradientDuoTone="purpleToPink">send</Button>
      </form>
    </div>
  );
}

export default Contact;
