import React from 'react';
import { FaShoppingCart, FaDownload, FaList } from 'react-icons/fa';
import styles from './pricingpage.module.css'; // Import CSS module

const PricingPage = () => {
  const descriptions = [
    {
      description: 'Click the button above to view our product catalogue.',
      link: 'https://example.com/link1',
      style: styles.description1,
      button: styles.button1,
      icon: <FaShoppingCart />,
    },
    {
      description: 'Download the E-brochure to know more about us.',
      link: 'https://example.com/link2',
      style: styles.description2,
      button: styles.button2,
      icon: <FaDownload />,
    },
    {
      description: 'Click the button above to view our price lists.',
      link: 'https://example.com/link3',
      style: styles.description3,
      button: styles.button3,
      icon: <FaList />,
    },
  ];

  return (
    <div className={styles.pricingContainer}>
      <hr className={styles.horizontalLine} />
      <h1 className={`${styles.pricingHeading} ${styles.center}`}>
        For best pricing, please share the details. We will revert back.
      </h1>

      <div className={styles.descriptionRow}>
        {descriptions.map(({ description, link, style, button, icon }, index) => (
          <div key={index} className={`${style} ${styles.descriptionItem}`}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={button}>
              {icon} Button {index + 1}
            </a>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
