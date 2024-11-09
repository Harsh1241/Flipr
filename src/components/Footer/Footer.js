import React from 'react';
// import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
      <div className="footer-center">
        <img src="https://via.placeholder.com/100x50" alt="Company Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook social-icon "></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-twitter social-icon "></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin social-icon "></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram social-icon "></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
