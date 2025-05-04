import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';
import Favourites from './pages/Favourites/Favourites';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;