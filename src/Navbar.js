import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Hospital Management</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="/home  ">Home</a></li>
        <li><a href="/service">Services</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
