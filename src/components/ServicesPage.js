import React from 'react';
import './ServicesPage.css'
import backgroundImage from './services.svg';
import { Link } from 'react-router-dom';

function ServicesPage() {
  return (
    

<div className="services-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', color: 'white', textAlign: 'center', overflowY: 'hidden', overflowX: 'hidden' }}>
      
    <div className="services-content">
       
        <div className="service-container">
          <div className="service">
            <h3>Service 1</h3>
            <p>Description of Service 1</p>
            <Link to="/signup"><button>Sign Up</button></Link>
          </div>
          <div className="service">
            <h3>Service 2</h3>
            <p>Description of Service 2</p>
            <Link to="/signup"><button>Sign Up</button></Link>
          </div>
          <div className="service">
            <h3>Service 3</h3>
            <p>Description of Service 3</p>
            <Link to="/signup"><button>Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
