import React from "react";
import { toast } from "react-hot-toast";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const handleLogout = () => {
    window.localStorage.clear();
    toast.success("Logged Out successfully! 😀");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <header className="header">
      <h3
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        Consulto
      </h3>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/LandingPage">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <div onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
