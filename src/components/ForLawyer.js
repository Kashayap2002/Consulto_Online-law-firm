// ForLawyer.js
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./ForLawyer.svg";
import "./ForLawyer.css";

const ForLawyer = () => {
  return (
    <div
      className="lawyer-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1 style={{ color: "#F3EFE9" }}>Welcome, Lawyers!</h1>
      <div className="paragraph-container">
        <p className="paragraph">
          Ever wondered about providing legal advice from the comfort of your home, while sipping a cup of coffee, to someone living in another part of the city? With Consulto, this is now possible!
          <br></br>Join Consulto today to connect with clients and showcase your expertise.
          
        </p>
        
        </div>
<br></br>
      <div className="lawyer-features">
        <h2>Key Benefits:</h2>
        <div className="feature-buttons">
          <button className="feature-button">Access Clients</button>
          <button className="feature-button">Manage Appointments</button>
          <button className="feature-button">Grow Network</button>
          <button className="feature-button">Enhance Credibility</button>
        </div>
      </div>
      <div className="cta-section">
        <p>Join Consulto today and elevate your practice!</p>
        <br></br>
        <Link to="/signup" className="cta-button">
          Sign Up Now
        </Link>
        <br></br>
      </div>
    </div>
  );
};

export default ForLawyer;