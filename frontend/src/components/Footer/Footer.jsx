import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiDiscover,
  SiDinersclub,
} from "react-icons/si";

function Footer() {
  return (
    <footer
      className="footer-container"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="footer-content">
        <div className="footer-section about">
          <h2
            className="logo-text"
            style={{
              fontFamily: "Dancing Script, cursive",
              fontSize: "2.5em",
              color: "#333",
            }}
          >
            CarAuras
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt diligis.
          </p>
          <div className="payment-icons">
            <SiVisa size={40} style={{ margin: "0 5px" }} />
            <SiMastercard size={40} style={{ margin: "0 5px" }} />
            <SiAmericanexpress size={40} style={{ margin: "0 5px" }} />
            <SiPaypal size={40} style={{ margin: "0 5px" }} />
            <SiDiscover size={40} style={{ margin: "0 5px" }} />
            <SiDinersclub size={40} style={{ margin: "0 5px" }} />
          </div>
        </div>

        <div className="footer-section links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#orders">Orders Tracking</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section account">
          <h3>ACCOUNT</h3>
          <ul>
            <li>
              <a href="#my-account">My Account</a>
            </li>
            <li>
              <a href="#orders-tracking">Orders Tracking</a>
            </li>
            <li>
              <a href="#checkout">Checkout</a>
            </li>
            <li>
              <a href="#wishlist">Wishlist</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>NEWSLETTER</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" className="email-input" />
            <button
              className="subscribe-button"
              style={{ backgroundColor: "#b3257b" }}
            >
              SUBSCRIBE
            </button>
          </div>
          <div className="social-links">
            <a href="#facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#pinterest" className="social-icon">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p>
          Copyright © 2025 All rights reserved | This template is made with{" "}
          <span style={{ color: "#b3257b" }}>♥</span> by Colorlib
        </p>
      </div>
    </footer>
  );
}

export default Footer;
