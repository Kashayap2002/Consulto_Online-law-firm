import React from "react";
import "./LandingPage.css";
import backgroundImage from "./pic.svg"; // Import the background image

function LandingPage() {
  return (
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
      <a href="#Services">
        <img
          src={process.env.PUBLIC_URL + "/Services_button.SVG"}
          alt="Click here"
        />
      </a>
    </div>
  );
}

export default LandingPage;
