import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaMapMarkerAlt,
  FaGasPump,
  FaCalendarAlt,
  FaCog,
  FaTachometerAlt,
} from "react-icons/fa";
import "./CarDetailsScreen.css";

const CarDetailsScreen = () => {
  const car = {
    name: "2023 BMW M3 Competition",
    price: "€78,500",
    location: "Munich, Germany",
    mileage: "15,000 km",
    fuel: "Petrol",
    year: "2023",
    transmission: "Automatic",
    engine: "3.0L Twin-Turbo I6",
    horsepower: "510 hp",
    topSpeed: "290 km/h",
    acceleration: "3.9s (0-100 km/h)",
    images: [
      "data:image/jpeg;base64,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",
    ],
    description: `The 2023 BMW M3 Competition is a high-performance sports sedan that combines exhilarating power with luxurious comfort. Powered by a 3.0-liter TwinPower Turbo inline 6-cylinder engine, it delivers a staggering 510 horsepower, propelling it from 0 to 100 km/h in just 3.9 seconds. Its aggressive styling, M-specific chassis tuning, and advanced technology make it a true driver's car. This particular model comes fully loaded with premium interior finishes, advanced driver-assistance systems, and a top-tier infotainment system.`,
    features: [
      "Leather Sport Seats",
      "Harman Kardon Sound System",
      "Adaptive M Suspension",
      "Carbon Fiber Interior Trim",
      "Heated Steering Wheel",
      "Head-Up Display",
      "Parking Assistant Plus",
      "Laserlight Headlights",
      "Apple CarPlay / Android Auto",
    ],
    sellerInfo: {
      name: "AutoLux Dealers",
      phone: "+49 176 1234 5678",
      email: "info@autolux.de",
      address: "Hauptstraße 10, 80331 Munich",
    },
  };

  // For a real app, you'd manage currentImageIndex with useState
  const currentImageIndex = 0; // Display the first image by default

  return (
    <div className="car-details-screen">
      <div className="image-gallery-section">
        <div className="main-image">
          <img src={car.images[currentImageIndex]} alt={car.name} />
          {/* In a real app, these would trigger image changes */}
          <div className="image-nav left">
            <FaChevronLeft />
          </div>
          <div className="image-nav right">
            <FaChevronRight />
          </div>
        </div>
        <div className="thumbnail-gallery">
          {car.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              // Add a click handler to change currentImageIndex in a real app
              className={index === currentImageIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>

      <div className="car-info-section">
        <div className="car-overview">
          <div className="overview-item">
            <FaMapMarkerAlt />
            <span>{car.location}</span>
          </div>
          <div className="overview-item">
            <FaTachometerAlt />
            <span>{car.mileage}</span>
          </div>
          <div className="overview-item">
            <FaGasPump />
            <span>{car.fuel}</span>
          </div>
          <div className="overview-item">
            <FaCalendarAlt />
            <span>{car.year}</span>
          </div>
          <div className="overview-item">
            <FaCog />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="car-description-and-features">
          <div className="description-card">
            <h2>Description</h2>
            <p>{car.description}</p>
          </div>

          <div className="features-card">
            <h2>Key Features</h2>
            <ul>
              {car.features.map((feature, index) => (
                <li key={index}>
                  <FaStar className="feature-icon" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="seller-contact-section">
        <div className="contact-card">
          <h2>Contact Seller</h2>
          <p>
            <strong>{car.sellerInfo.name}</strong>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${car.sellerInfo.phone}`}>{car.sellerInfo.phone}</a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${car.sellerInfo.email}`}>
              {car.sellerInfo.email}
            </a>
          </p>
          <p>Address: {car.sellerInfo.address}</p>
          <button
            className="contact-button"
            // No inline style, let CSS handle it
          >
            Message Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsScreen;
