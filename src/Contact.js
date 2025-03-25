// Contact.js
import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to reach out, please fill out the form below.</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
