
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TrailStories from '@/components/TrailStories';
import ServiceGrid from '@/components/ServiceGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TrailStories />
      <ServiceGrid />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
