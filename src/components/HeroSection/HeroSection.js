import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Instead of using router, we'll redirect using window.location
    window.location.href = `/search.html?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`;
  };
  
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Find Your Perfect Stay</h1>
        <p>Discover amazing properties at the best prices</p>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text" 
              placeholder="Where are you going?" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Check-in</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Check-out</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Guests</label>
            <select 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;