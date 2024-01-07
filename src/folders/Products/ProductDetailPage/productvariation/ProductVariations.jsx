// ProductVariations.js

import React, { useState } from 'react';

const ProductVariations = ({ variations }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (type, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [type]: option,
    });
  };

  return (
    <div className="product-variations">
      {variations.map((variation, index) => (
        <div key={index}>
          <h4>{variation.type}</h4>
          <div className="options">
            {variation.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionChange(variation.type, option.name)}
                className={selectedOptions[variation.type] === option.name ? 'selected' : ''}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductVariations;
