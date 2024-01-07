// DescCards.js

import React from 'react';
import styles from './descCard.module.css'; // Import the CSS module
import image1 from '../assets/fanImage.jpg'; // Replace this with your image paths
import image2 from '../assets/RecoldImage.jpg';
import IndoAsianLogo from '../assets/IndoAsian.png';
import PolycabLogo from '../assets/polycablogo.jpg';
import AnchorLogo from '../assets/anchor logo.png';

const DescCards = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h2 className={styles.customCardTitle}>
            Embrace the Power of GuruDev Electricals.
          </h2>
          <p className={styles.cardContent}>
            Welcome to GuruDev Electrical and Hardware, Established in the year 2019 and sister Concern of Prakash Electrical Agencies Chickpet Bangalore (established in the year 1994)
            <br /><br />
            Prakash Electricals and Agencies Channel Partners for
            <div className={`${styles.specialLogoLink} ${styles.cardBody}`}>
              <a href="https://example.com/IndoAsianLink" target="_blank" rel="noopener noreferrer">
                <img src={IndoAsianLogo} alt="IndoAsian Logo" />
              </a>
              <a href="https://example.com/PolycabLink" target="_blank" rel="noopener noreferrer">
                <img src={PolycabLogo} alt="Polycab Logo" />
              </a>
              <a href="https://example.com/AnchorLink" target="_blank" rel="noopener noreferrer">
                <img src={AnchorLogo} alt="Anchor Logo" />
              </a>
            </div>
            range of products. Your ultimate hub for a wide range of electrical and hardware essentials.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.cardImage} src={image1} alt="Card Image 1" />
        <div className={styles.cardBody}>
          <p className={styles.cardText}>
            At GuruDev Electrical and Hardware, we're more than electrical appliances. Our extensive array includes diverse hardware items, catering to varied needs. Whether it's DIY tools or specific components for repairs or construction, our store has it all. Visit us today for a seamless experience in finding your geyser, fan, and hardware essentials, all conveniently available under one roof.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <p className={styles.cardText}>
            We believe in offering quality products at competitive prices without compromising on reliability or performance. Visit GuruDev and let us assist you in making the right choices for your electrical and hardware requirements with our extensive product range and knowledgeable staff. The company has grown in the electrical industry and now we are the leading Dealers and distributors of Multi products and Multi-branded electrical goods, serving customers across the southern states.
          </p>
        </div>
        <img className={styles.cardImage} src={image2} alt="Card Image 2" />
      </div>
    </div>
  );
};

export default DescCards;
