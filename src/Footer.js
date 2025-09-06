import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Adjust the path as necessary
import { color } from 'framer-motion';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          
          <p className="footer-description">
            We are dedicated to fostering innovation and supporting entrepreneurs in building a better future.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/Dashboard">About Us</Link></li>
            <li><Link to="/SupportResources">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">🔗</a>
          
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Gujarat Government. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
