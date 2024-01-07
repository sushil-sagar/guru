import React from 'react';
import './pp1.css'; // Import your CSS file for styling

function ProductList() {

  const productList = [
    {
      category: {
        name: 'Geyser',
        link: 'https://example.com/geyser-link',
      },
      items: [
        'Storage Water Heaters',
        'Tankless (On-Demand) Water Heaters',
        'Heat Pump Water Heaters',
        'Solar Water Heaters',
        'Instant Water Heaters',
        'Condensing Water Heaters',
        'Hybrid Water Heaters',
        'Gas Water Heaters',
        'Electric Water Heaters',
        'Smart Water Heaters',
      ],
    },
    {
      category: {
        name: 'Fans',
        link: 'https://drive.google.com/drive/folders/1hv0F6Jg2fnyUZl6WTwbpYi9Om0qgN8p9',
      },
      items: [
        'Ceiling Fans',
        'Table Fans',
        'Tower Fans',
        'Wall-Mounted Fans',
        'Pedestal Fans',
        'Exhaust Fans',
        'Box Fans',
        'Bladeless Fans',
        'Attic Fans',
        'Mist Fans',
      ],
    },
    {
      category: {
        name: 'Hardware',
        link: 'https://example.com/geyser-link',
      },
      items: [
        'Hinges',
        'Handles and Knobs',
        'Locks and Latches',
        'Door Closers',
        'Door Stoppers',
        'Bolts and Catches',
        'Flush Pulls',
        'Door Viewers',
        'Kick Plates',
        'Weatherstripping',
      ],
    },
    {
      category: {
        name: 'Lighting',
        link: 'https://example.com/geyser-link',
      },
      items: [
        'Incandescent Lighting',
        'Fluorescent Lighting',
        'LED (Light Emitting Diodes)',
        'Halogen Lighting',
        'CFL (Compact Fluorescent Lamp)',
        'HID (High-Intensity Discharge)',
        'Neon Lighting',
        'Fiber Optic Lighting',
        'Laser Lighting',
        'Natural Lighting',
      ],
    },
  ];

  return (
    <div className='product'> 
    <h1 style={{textAlign:'center'}}>Our Products</h1>
    <br />
    <div className="product-list">
      {productList.map((productCategory, index) => (
        <div key={index} className="category">
          <h3>
            <a href={productCategory.category.link} target="_blank" rel="noopener noreferrer">
              {productCategory.category.name}
            </a>
          </h3>
          <ul>
            {productCategory.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
