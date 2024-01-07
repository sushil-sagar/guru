// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/homepage/main';
import About from './components/About/about';
import Products from './components/Products/main';
import Contact from './components/Contact/contact';
import Navbar from './components/headers/header';
import Careers from './components/careers/main';
import PricingPage from './components/download button/downbtn';
import Footer from './components/footer/footer';
import ProductDetail from './components/Products/ProductDetailPage/ProductDetailPage'; // Import the ProductDetail component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} /> {/* New route for ProductDetail */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PricingPage />
      <Footer />
    </Router>
  );
}

export default App;
