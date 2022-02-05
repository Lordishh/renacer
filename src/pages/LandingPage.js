import React from 'react';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services/ServicesSection';

const LandingPage = () => (
  <div>
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
  </div>
);

export default LandingPage;
