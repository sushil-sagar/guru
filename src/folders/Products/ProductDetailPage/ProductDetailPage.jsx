import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link
import productData from '../productdata'; // Import your product data
import Carousel from 'react-bootstrap/Carousel';
import ProductVariations from './productvariation/ProductVariations'; // Import ProductVariations component
import './ProductDetail.css'; // Import your CSS file for styling

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const { name, description, images, pdfUrl, price } = product;

  const handleDownloadPDF = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="product-detail">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: ₹{price}</p> {/* Display price in Rupees */}
        <ProductVariations variations={product.variations} />
        {/* Other product information */}
        <div>
          <button onClick={handleDownloadPDF}>Download PDF</button>
          <Link to="/contact">
            <button>Contact Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
