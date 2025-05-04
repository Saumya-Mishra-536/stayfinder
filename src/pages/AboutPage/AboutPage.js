import React from 'react';
import Navbar from '../../components/Navbar_/Navbar';
import Footer from '../../components/Footer/Footer';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>We are a modern real estate platform helping users find their dream home with ease and transparency.</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
