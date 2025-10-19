import React from "react";
import "./AdvertisementSection.css";

function AdvertisementSection() {
  return (
    <div className="advertisement-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Your Next Adventure Starts Here</h1>
        <p className="hero-subtitle">
          Discover incredible deals on reliable used cars.
        </p>
        <button className="hero-button">Explore Inventory</button>
      </div>
    </div>
  );
}

export default AdvertisementSection;
