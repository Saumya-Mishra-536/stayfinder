import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">StayFinder</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/search.html">Search</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/contact.html">Contact</a></li>
        {isLoggedIn ? (
          <>
            <li><a href="/favorites.html">Favorites</a></li>
            <li><button onClick={() => setIsLoggedIn(false)} className="auth-button">Logout</button></li>
          </>
        ) : (
          <li><a href="/login.html" className="auth-button">Login</a></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;