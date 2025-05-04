import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="simple-footer">
      <p className="footer-brand">StayFinder &mdash; Find your perfect stay</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/search.html">Search</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
      </div>
      <p className="footer-contact">
        info@stayfinder.com &nbsp;|&nbsp; (123) 456-7890
      </p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} StayFinder</p>
    </footer>
  );
}

export default Footer;
