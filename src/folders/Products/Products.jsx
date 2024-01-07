import React from 'react';
import './Products.css'; // Import your CSS file for styling
import { FaCoffee } from 'react-icons/fa';
import Pp1 from "./pp1";

function Products() {
  return (<>
    <div className="products-container">
      <div className="top-image">
        <img
          src="https://via.placeholder.com/150"
          alt="Top"
          style={{ height: '80vh', width: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="cards-section">
        <div className="row justify-content-center">
          {/* First Card */}
          <div className="col-md-4">
            <div className="card text-center">
              <FaCoffee className="icon" />
              <h3>Title 1</h3>
              <p>Description 1</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4">
            <div className="card text-center">
              <FaCoffee className="icon" />
              <h3>Title 2</h3>
              <p>Description 2</p>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-4">
            <div className="card text-center">
              <FaCoffee className="icon" />
              <h3>Title 3</h3>
              <p>Description 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pp1/>
    </>
  );
}

export default Products;
