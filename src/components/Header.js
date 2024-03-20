import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <marquee className="marquee" behavior="scroll" direction="left">
        <h1>Welcome to CONSULTO</h1>
      </marquee>
      <nav className="nav"> {/* Add the "nav" class here */}
        <ul>
        <li><Link to="/LandingPage">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/signup">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
