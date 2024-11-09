import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom or replace with anchor tags for scrolling functionality.
// import './Navbar.css'; // Create a separate CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MyApp</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Change to <a href="#home">Home</a> for scroll-based navigation */}
        </li>
        <li>
          <Link to="/services">Services</Link> {/* Change to <a href="#services">Services</a> for scroll-based navigation */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Change to <a href="#about">About</a> for scroll-based navigation */}
        </li>
        <li>
          <button className="connect-button">Connect</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
