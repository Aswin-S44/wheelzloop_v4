import React from "react";
import "./SubHeader.css";

function SubHeader() {
  const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Appliances",
    "Beauty",
    "Grocery",
    "Mobiles",
    "Travel",
    "Books",
    "Sports",
    "Toys",
    "Pharmacy",
  ];

  return (
    <div className="subheader">
      <div className="subheader-container">
        <nav className="category-nav">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={`#${category.toLowerCase()}`}>{category}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SubHeader;
