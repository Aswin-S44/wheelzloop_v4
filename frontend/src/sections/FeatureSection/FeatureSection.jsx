import React from "react";
import "./FeatureSection.css"; // Ensure this CSS file is updated as well

function FeatureSection() {
  return (
    <section className="feature-section-container">
      <div className="feature-section-header">
        <h2>Why Choose Our Platform?</h2>
        <p>
          Experience a seamless and trustworthy journey in buying or selling
          your next vehicle.
        </p>
      </div>
      <div className="feature-cards-wrapper">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <span className="feature-icon">🚀</span>
          </div>
          <h3>Expansive Inventory</h3>
          <p>
            Browse through an unparalleled selection of cars, trucks, and SUVs,
            updated daily.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <span className="feature-icon">💎</span>
          </div>
          <h3>Premium Value</h3>
          <p>
            Secure the best possible deals with transparent pricing and no
            hidden fees.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <span className="feature-icon">✅</span>
          </div>
          <h3>Certified Assurance</h3>
          <p>
            Every listing is vetted for quality and authenticity, ensuring peace
            of mind.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <span className="feature-icon">⚡</span>
          </div>
          <h3>Effortless Experience</h3>
          <p>
            Our intuitive platform makes finding and purchasing your dream car
            simple and fast.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
