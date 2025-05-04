import React, { useState } from 'react';
import './Filter.css';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
    bathrooms: 'any'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: value
    };
    
    setFilters(updatedFilters);
    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };
  
  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };
  
  return (
    <div className="filters">
      <h3>Filter Properties</h3>
      
      <div className="filter-group">
        <label>Property Type</label>
        <select name="propertyType" value={filters.propertyType} onChange={handleChange}>
          <option value="all">All Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Price Range</label>
        <div className="price-inputs">
          <input 
            type="number" 
            name="minPrice" 
            placeholder="Min" 
            value={filters.minPrice} 
            onChange={handleChange}
          />
          <span>to</span>
          <input 
            type="number" 
            name="maxPrice" 
            placeholder="Max" 
            value={filters.maxPrice} 
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="filter-group">
        <label>Bedrooms</label>
        <select name="bedrooms" value={filters.bedrooms} onChange={handleChange}>
          <option value="any">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Bathrooms</label>
        <select name="bathrooms" value={filters.bathrooms} onChange={handleChange}>
          <option value="any">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      
      <button className="apply-filters" onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;
