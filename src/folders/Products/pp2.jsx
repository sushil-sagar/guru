import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./pp2.module.css";
import productData from "../Products/productdata"; // Assuming productData.js is in the same directory

const ProductPage = () => {
  // Extract unique categories from productData
  const categories = [...new Set(productData.map(product => product.category))];

  // Organize products by category
  const productsByCategory = categories.reduce((acc, category) => {
    acc[category] = productData.filter(product => product.category === category);
    return acc;
  }, {});

  return (
    <div className={styles['product-page']}>
      <h1>Welcome to Gurudev Electricals and Hardware</h1>
      <div className={styles['product-categories']}>
        {categories.map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
            <div className={styles['product-list']}>
              {productsByCategory[category].length > 0 ? (
                productsByCategory[category].map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`} className={styles['product-item-link']}>
                    <div className={styles['product-item']}>
                      {/* You can use product.id to link to a specific product */}
                      <p>{product.name}</p>
                      {/* Add product details, pricing, and buy now button */}
                      <button className={styles['buy-button']}>Buy Now</button>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
