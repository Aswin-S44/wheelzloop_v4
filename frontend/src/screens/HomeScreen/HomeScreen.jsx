import React from "react";
import "./HomeScreen.css";
import Carousel from "../../components/Carousel/Carousel";
import PopularCarsSection from "../../sections/PopularCarsSection/PopularCarsSection";
import AdvertisementSection from "../../sections/AdvertisementSection/AdvertisementSection";
import WhyChooseUsSection from "../../sections/WhyChooseUsSection/WhyChooseUsSection";
import Footer from "../../components/Footer/Footer";

function HomeScreen() {
  return (
    <div>
      <Carousel />
      {/* <FeatureSection /> */}
      <PopularCarsSection />
      <AdvertisementSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
}

export default HomeScreen;
