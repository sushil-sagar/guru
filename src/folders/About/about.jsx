// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import the CSS file
import TopImage from '../assets/racold.jpg'; // Import your top image
import VisionImg from '../assets/vision.webp'; // Import your side image
import missionImage from "../assets/commitment.webp"
import whyImage from "../assets/why.webp"
import CustomerValuesPage from './ttlcard/ttl';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Top Image */}
      <div className="top-image">
        <img src={TopImage} alt="Top" />
      </div>

      {/* Content Row */}
      <div className="content-row">
        {/* Side Image */}
        <div className="side-image">
          <img src={VisionImg} alt="Side" />
        </div>

        {/* Vision Text */}
        <div className="vision-text">
          <h2 className="vision-title">Our Vision</h2>
          <p>
            At the core of our mission lies the vision to redefine the standards of home comfort.
            We aspire to be more than just a purveyor of products; we aim to be pioneers in delivering excellence.
            By combining innovation, reliability, and customer-centricity, we aim to create a seamless and delightful experience for every homeowner.
            {/* ... (rest of your text content) */}
          </p>
        </div>
      </div>
      
      {/* Content Row */}
      <div className="content-row">
        {/* Side Image */}
        
        </div>

        
      {/* Content Row */}
      <div className="content-row">
        {/* Side Image */}
      

        {/* Vision Text */}
        <div className="vision-text1">
          <h2 className="vision-title">Our Vision</h2>
          <p>
            At the core of our mission lies the vision to redefine the standards of home comfort.
            We aspire to be more than just a purveyor of products; we aim to be pioneers in delivering excellence.
            By combining innovation, reliability, and customer-centricity, we aim to create a seamless and delightful experience for every homeowner.
            {/* ... (rest of your text content) */}
          </p>
        </div>  <div className="side-image">
          <img src={missionImage} alt="Side" />
        </div>
      </div>
      <div className="content-row">
        {/* Side Image */}
        <div className="side-image">
          <img src={whyImage} alt="Side" />
        </div>

        {/* Vision Text */}
        <div className="vision-text">
          <h2 className="vision-title">Our Vision</h2>
          <p>
            At the core of our mission lies the vision to redefine the standards of home comfort.
            We aspire to be more than just a purveyor of products; we aim to be pioneers in delivering excellence.
            By combining innovation, reliability, and customer-centricity, we aim to create a seamless and delightful experience for every homeowner.
            {/* ... (rest of your text content) */}
          </p>
        </div>
      </div>
      
      {/* Content Row */}
      <div className="content-row">
        {/* Side Image */}
        
        </div>
<CustomerValuesPage/>
    </div>
  );
};

export default AboutUs;
