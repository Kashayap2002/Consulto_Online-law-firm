import React from "react";
import "./ServicesPage.css";
import backgroundImage from "./services2.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel, faFileContract, faRegistered , faPlaneDeparture, faHandHoldingDollar, faPeopleRoof} from '@fortawesome/free-solid-svg-icons'

function ServicesPage() {
  return (
    <div
      className="services-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1>Our Services</h1> {/* Moved heading above services-content */}
      <div className="services-content">
        <div className="service">
          <h3>AGREEMENTS</h3>
          <Link to="/signup">
            <FontAwesomeIcon icon={faGavel} className="fa-icon" />
          </Link>
        </div>
        <div className="service">
          <h3>PATENTS</h3>
          <Link to="/signup">
            <FontAwesomeIcon icon={faFileContract} className="fa-icon" /> 
          </Link>
        </div>
        <div className="service">
          <h3>TRADEMARKS</h3>
          <Link to="/signup">
            <FontAwesomeIcon icon={faRegistered} className="fa-icon" /> 
          </Link>
        </div>
        {/* Additional service containers */}
        <div className="service">
          <h3>IMMIGRATION</h3>
          <Link to="/signup">
            <FontAwesomeIcon icon={faPlaneDeparture} className="fa-icon" />
          </Link>
        </div>
        <div className="service">
          <h3>TAX</h3>
          <Link to="/signup">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="fa-icon" />
          </Link>
        </div>
        <div className="service">
          <h3>FAMILY LAW</h3> 
          <Link to="/signup">
            <FontAwesomeIcon icon={faPeopleRoof} className="fa-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
