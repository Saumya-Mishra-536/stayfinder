import React from 'react';
import Navbar from '../../components/Navbar_/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Filters from '../../components/Filter/Filter';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <Filters />
      <div className="property-list">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
