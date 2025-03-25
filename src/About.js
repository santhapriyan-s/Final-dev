import React from 'react';
import './About.css'; // Import the corresponding CSS for styling

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to MyWebsite! We are passionate about delivering top-quality content and services that help you meet your goals. Our mission is to create a space where users can find valuable information, tools, and resources to enhance their online experience.
        </p>
        <p>
          Our team works diligently to offer a seamless and intuitive experience for all users. We are constantly innovating and improving our platform to bring the best features and resources right at your fingertips. 
        </p>
        <p>
          Thank you for being part of our journey. We hope to inspire and empower you to achieve more, every day!
        </p>
        <a href="#contact" className="cta-button">Get In Touch</a> {/* Optional call-to-action */}
      </div>
    </section>
  );
};

export default About;
