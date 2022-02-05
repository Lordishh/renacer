import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsletterSection from '../components/NewsletterSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';

const LandingPage = () => (
  <div>
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TeamSection />
    <NewsletterSection />
    <ContactSection />
    <Footer />
  </div>
);

export default LandingPage;
