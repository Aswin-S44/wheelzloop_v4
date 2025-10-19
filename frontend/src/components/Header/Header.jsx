import React, { useState } from "react";
import "./Header.css";
import SubHeader from "../SubHeader/SubHeader";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>MyStore</h1>
          </div>
          <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button type="button">Search</button>
          </div>
          <div className="user-actions">
            <a href="#login">Login</a>
            <a href="#cart">Cart (0)</a>
          </div>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>
      <SubHeader />
    </>
  );
}

export default Header;
