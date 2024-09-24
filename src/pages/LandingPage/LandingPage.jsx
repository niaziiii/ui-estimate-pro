import React from "react";
import HeroSection from "../../components/landingpage/heroSection/HeroSection";
import Slider from "../../components/landingpage/slider/Slider";
import Separates from "../../components/landingpage/separates/Separates";
import Estimate from "../../components/landingpage/estimate/Estimate";
import Pricing from "../../components/landingpage/pricing/Pricing";
import Signup from "../../components/landingpage/signUp/SignUp";
import Footer from "../../components/landingpage/footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Slider />
      <Separates />
      <Estimate />
      <Pricing />
      <Signup />
      <Footer />
    </div>
  );
}
