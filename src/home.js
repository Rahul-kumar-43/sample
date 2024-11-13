import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">Hospital Management System</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">About</Link></li>
            <li><Link to="/home">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login" id='login-button'>Login</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Hospital</h1>
          <p>Your health is our top priority</p>
          <Link to="/login" className="cta-button">Explore Services</Link>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-box">
            <h3>Outpatient Care</h3>
            <p>Comprehensive outpatient services including consultations, diagnostics, and treatment.</p>
          </div>
          <div className="service-box">
            <h3>Inpatient Care</h3>
            <p>State-of-the-art inpatient facilities ensuring comfort and care for all patients.</p>
          </div>
          <div className="service-box">
            <h3>Emergency Services</h3>
            <p>24/7 emergency services with immediate response and care for critical conditions.</p>
          </div>
          <div className="service-box">
            <h3>Surgical Services</h3>
            <p>Advanced surgical services with experienced surgeons and modern technology.</p>
          </div>
        </div>
      </section>

      {/* New Sections */}
      <section className="additional-section">
        <h2>Additional Features</h2>
        <div className="additional-grid">
          <div className="additional-box">
            <h3>Patients</h3>
            <p>Manage patient records, appointments, and medical history efficiently.</p>
          </div>
          <div className="additional-box">
            <h3>Appointments</h3>
            <p>Schedule and manage appointments for doctors and patients.</p>
          </div>
          <div className="additional-box">
            <h3>Doctors</h3>
            <p>Meet our highly qualified doctors and medical staff who are dedicated to your care.</p>
          </div>
          <div className="additional-box">
            <h3>Campaigns</h3>
            <p>Stay updated with our health awareness campaigns and community outreach programs.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
