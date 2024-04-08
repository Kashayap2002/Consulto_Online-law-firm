import React from "react";
import "./LandingPage.css";
import backgroundImage from "./pic.svg"; // Import the background image

function LandingPage() {
  return (
    <div>
      <div
        className="app"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          overflowY: "hidden",
          overflowX: "hidden",
        }}
      >
        {/* Other components */}
        {/* <a href="#Services">
          <img
            src={process.env.PUBLIC_URL + "/Services_button.SVG"}
            alt="Click here"
          />
        </a> */}

        {/* Main content */}

      </div>
      {/* Wrap the footer here */}
      <footer className="footer">
        <div className="column">
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>
        <div className="information">
          <p>&copy; 2024 Consulto</p>
          <p>Email: consulto@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
