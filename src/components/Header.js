import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { BsBasket2Fill } from "react-icons/bs";
import "../assets/styles/Header.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="top-header">Frontend Technical Challenge</div>
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <NavLink to="/cards" className="logo">
                <div className="logo-company">moonpig</div>
                <div className="logo-space">|</div>
                <div className="logo-slogan">Creating Moments that Matter</div>
              </NavLink>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink to="/cards" onClick={handleShowNavbar}>
                  CARDS
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleShowNavbar}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/basket" onClick={handleShowNavbar}>
                  BASKET <BsBasket2Fill />
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
