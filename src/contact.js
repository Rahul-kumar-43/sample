import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any queries, please fill out the form below. We are here to help!</p>
      
      <div className="contact-info">
        <div className="info-item">
          <h3>Address:</h3>
          <p>123 Health Avenue, Medical City, Country</p>
        </div>
        
        <div className="info-item">
          <h3>Phone:</h3>
          <p>+123 456 7890</p>
        </div>

        <div className="info-item">
          <h3>Email:</h3>
          <p>support@hospitalmanagement.com</p>
        </div>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
