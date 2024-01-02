import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Header.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <div className="top-header">Frontend Technical Challenge</div>
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              moonpig <span> | Creating Moments that Matter</span>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            Hamburgericon
          </div>
          <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink to="/cards" onClick={handleShowNavbar}>
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleShowNavbar}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleShowNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
