import React from "react";
import Header from "../components/Header";
import AboutSection from "../components/Sections/AboutSection";
import ServicesSection from "../components/Sections/ServicesSection";
import WhyChoose from "../components/Sections/WhyChoose";
import HeroSection from "../components/Sections/HeroSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <HeroSection />
      <div className="w-[1000px] mt-[30px]">
        <AboutSection />
      </div>
      <ServicesSection />
      <WhyChoose />
    </div>
  );
};

export default Home;
