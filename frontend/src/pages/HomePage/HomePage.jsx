import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Header/Breadcrumbs/Breadcrumbs";
function HomePage() {
  return (
    <div>
      <Header />

      <a href="/product/1">details</a>
    </div>
  );
}

export default HomePage;
