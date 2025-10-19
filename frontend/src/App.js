import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import PopularCarsSection from "./sections/PopularCarsSection/PopularCarsSection";
import AdvertisementSection from "./sections/AdvertisementSection/AdvertisementSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection/WhyChooseUsSection";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import CarDetailsScreen from "./screens/CarDetailsScreen/CarDetailsScreen";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/car" element={<CarDetailsScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
