import React from 'react';
import './Brands.css';

const Brands = ({ brands }) => {
    
  return (
    <div className="brands-section">
      <h2>Working with brands that inspire us...</h2>
      <div className="brand-logos">
        {brands.map((brand, index) => (
          <div className="brand" key={index}>
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;