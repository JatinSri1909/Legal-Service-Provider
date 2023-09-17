// Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar(props) {
  // Smooth scrolling function
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar" style={{ position: "fixed", width: "100%" }}>
      <div className="navbar-content">
        <div className="logo">
          <span onClick={() => smoothScrollTo("home-section")}>Legal Service Provider</span>
        </div>
        <ul className="nav-links">
          <li onClick={() => smoothScrollTo("home-section")}>Home</li>
          <li onClick={() => smoothScrollTo("about-section")}>About Us</li>
          <li onClick={() => smoothScrollTo("services-section")}>Services</li>
          <li onClick={() => smoothScrollTo("laws-section")}>Laws & Regulations</li>
          <li onClick={() => smoothScrollTo("contact-section")}>Contact</li>
        </ul>
        <div className="auth-buttons">
          <button className="button">Login</button>
          <button className="button">Signup</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
