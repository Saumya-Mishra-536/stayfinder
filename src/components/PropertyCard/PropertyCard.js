import React, { useState } from 'react';
import './PropertyCard.css';

function PropertyCard({ property, isFavorite, onToggleFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite || false);
  
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newState = !favorite;
    setFavorite(newState);
    
    if (onToggleFavorite) {
      onToggleFavorite(property.id, newState);
    }
  };
  
  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const handleCardClick = () => {
    window.location.href = `/property.html?id=${property.id}`;
  };
  
  return (
    <div className="property-card" onClick={handleCardClick}>
      <div className="property-image">
        <img src={property.image} alt={property.address} />
        <button 
          className={`favorite-button ${favorite ? 'favorite' : ''}`}
          onClick={handleFavoriteClick}
        >
          ♥
        </button>
      </div>
      
      <div className="property-info">
        <div className="property-price">${formatPrice(property.price)}</div>
        <div className="property-address">{property.address}</div>
        <div className="property-location">{property.city}, {property.state}</div>
        
        <div className="property-details">
          <span>{property.bedrooms} bd</span>
          <span>•</span>
          <span>{property.bathrooms} ba</span>
          <span>•</span>
          <span>{property.sqft} sqft</span>
        </div>
        
        <div className="property-rating">
          <span className="stars">{"★".repeat(Math.round(property.rating))}</span>
          <span className="review-count">({property.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;