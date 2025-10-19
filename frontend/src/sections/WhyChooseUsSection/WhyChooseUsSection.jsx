import React from "react";
import "./WhyChooseUsSection.css";
import {
  FaShippingFast,
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa"; // Using appropriate icons

function WhyChooseUsSection() {
  const benefits = [
    {
      icon: <FaShippingFast />,
      title: "Nationwide Delivery",
      subtitle: "To your doorstep",
    },
    {
      icon: <FaCheckCircle />,
      title: "Certified & Inspected",
      subtitle: "Quality assurance",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Online Support",
      subtitle: "Dedicated assistance",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      subtitle: "100% protected",
    },
  ];

  // Placeholder images for car-related content
  const carImages = [
    "https://via.placeholder.com/400x300/34495e/ffffff?text=Luxury+Interior",
    "https://via.placeholder.com/400x300/2c3e50/ffffff?text=Engine+Detail",
    "https://via.placeholder.com/400x300/1abc9c/ffffff?text=Performance+Shot",
    "https://via.placeholder.com/400x300/2ecc71/ffffff?text=Electric+Vehicle",
    "https://via.placeholder.com/400x300/3498db/ffffff?text=Family+SUV",
    "https://via.placeholder.com/400x300/9b59b6/ffffff?text=Classic+Car",
  ];

  return (
    <div className="car-showcase-container">
      {/* Top Benefits Bar */}
      <div className="car-benefits-bar">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benefit-text">
              <h3>{benefit.title}</h3>
              <p>{benefit.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Showcase Section */}
      <div className="car-image-grid">
        {carImages.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image} alt={`Car related image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
