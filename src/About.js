import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to our Hospital Management System. Our hospital is committed to providing
          exceptional healthcare services using cutting-edge technology and compassionate care.
          We strive to offer comprehensive medical solutions, from preventive care to advanced
          treatments, ensuring our patients receive the highest quality of care.
        </p>
        <p>
          Established in 2005, our hospital has grown into one of the leading healthcare providers
          in the region. With state-of-the-art facilities, skilled medical professionals, and a patient-centered approach, we are dedicated to improving the lives of our patients and their families.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver world-class healthcare services that are accessible,
          affordable, and focused on the well-being of our community. We aim to enhance
          patient experiences through personalized treatment plans and cutting-edge medical
          technology.
        </p>
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the premier healthcare institution in the country, recognized for
          clinical excellence, technological innovation, and compassionate patient care.
          We are committed to continually evolving to meet the growing needs of our patients.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert team of doctors, nurses, and healthcare professionals</li>
          <li>Advanced medical equipment and modern facilities</li>
          <li>24/7 emergency services</li>
          <li>Comprehensive patient care from diagnosis to recovery</li>
          <li>Affordable healthcare plans</li>
        </ul>
        <p>
          At our hospital, we believe that good health is the foundation for a fulfilling life.
          We are here to support you at every step of your healthcare journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
