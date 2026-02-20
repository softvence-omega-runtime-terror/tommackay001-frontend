"use client";

import EfficiencySection from "../../components/landing/EfficiencySection";
import FAQSection from "../../components/landing/FAQSection";
import Features from "../../components/landing/Features";
import FinalCTA from "../../components/landing/FinalCTA";
import Hero from "../../components/landing/Hero";
import Pricing from "../../components/landing/Pricing";
import ProcessSection from "../../components/landing/ProcessSection";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <EfficiencySection />
      <Features />
      <ProcessSection />
      <Pricing />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;
