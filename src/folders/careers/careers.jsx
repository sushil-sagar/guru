import React from 'react';
import styles from './Careers.module.css'; // Import your CSS file for styling
import topImage from '../assets/career.png';

function Careers() {
  return (
    <div className={styles['careers-container']}>
    <div className={styles['top-image']}>
    
      </div>

      <div className={styles.content}>
        <h2 style={{textAlign:'center'}}>Careers at Gurudev Electricals</h2>
        <p>
          Join Gurudev Electricals - Explore Your Potential! At Gurudev Electricals, we believe in
          fostering an environment that thrives on innovation, collaboration, and excellence. We are
          a team-driven by the passion to create electrical solutions that make a difference.
          Inspired by a culture of constant improvement, we are dedicated to the growth and
          development of our employees. Our commitment lies not only in providing exceptional
          electrical services but also in empowering our workforce to excel. Currently, we are
          actively seeking talented individuals to join our dynamic team. We have openings in various
          roles, offering opportunities in engineering, product development, customer relations, and
          more. If you're someone who values innovation, embraces challenges, and aspires to
          contribute to a brighter future in the electrical industry, we invite you to explore a
          rewarding career at Gurudev Electricals. Come join us on this journey of innovation and
          growth. Your unique skills and perspectives can shape the future of electrical solutions.
          Take the first step towards an exciting career by filling out the form below.
        </p>
      </div>
    </div>
  );
}

export default Careers;
