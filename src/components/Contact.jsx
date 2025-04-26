import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <p>I would love to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;