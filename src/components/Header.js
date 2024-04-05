import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h3>Consulto</h3>
      <nav className="nav"> 
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
