import React from 'react';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';

const LandingPage = () => (
  <div>
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
  </div>
);

export default LandingPage;
