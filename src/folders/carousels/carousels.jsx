import React, { useRef, useEffect } from 'react';
import { Card, Col, Container } from 'react-bootstrap';

import brandLogo1 from '../assets/racoldlogo.jpg'; // Replace with your image paths
import brandLogo2 from '../assets/cromptonlogo.png';
import brandlogo3 from "../assets/hevells.jpg";
import brandLogo4 from '../assets/Bajajlogo.png';
import brandLogo5 from '../assets/decorlitelogo.png';
import brandLogo6 from '../assets/pasolite.jpg';
import brandLogo7 from '../assets/wiproLogo.jpg';
import brandLogo8 from '../assets/gmlogo.jpg';
import brandLogo9 from '../assets/IndoAsian.png';
import brandLogo10 from '../assets/anchor logo.png';

const CardCarousels = () => {
  const brandLogos = [
    brandLogo1,
    brandLogo2,
    brandlogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
    brandLogo9,
    brandLogo10
  ];
  const externalLinks = [
    'https://drive.google.com/drive/folders/1pDZclJFYSUEFIfiH7mrAz7SX-v1jk0r7',
    'https://drive.google.com/drive/folders/14nGlGTASzXtV9NSY0tqvQ0X7hXIByuy8',
    'https://drive.google.com/drive/folders/1G3krJL4yuAscc1m89Z4R6921Zqf-blmy',
    'https://drive.google.com/drive/folders/1K3aYp97Ranfr1-XAuH3x0yLpiLyGGOnb',
    'https://drive.google.com/drive/folders/1-Ojyxbc2MnBBJIf6bbjh0kF2V5TmgIjM',
    'https://drive.google.com/drive/folders/1qI6oqcfGpzaUJJ7eYa0ATK8HqMRD1auj',
    'https://drive.google.com/drive/folders/1Ep33mQUJ6EsfDFoQGlp1FOlyJPjV8ytM',
    'https://drive.google.com/drive/folders/1jFNWIpcQHxYtj47hrnPV8PVRfq3L1-Uo',
    'https://example.com/link9',
    'https://example.com/link10'
  ];

  const listRef = useRef(null);

  useEffect(() => {
    let interval;

    const startScrolling = () => {
      interval = setInterval(() => {
        if (listRef.current) {
          listRef.current.scrollLeft -= 250;
          const scrollRightLimit =
            listRef.current.scrollWidth - listRef.current.clientWidth;

          if (listRef.current.scrollLeft === 0) {
            listRef.current.scrollLeft = scrollRightLimit;
          } else if (listRef.current.scrollLeft === scrollRightLimit) {
            listRef.current.scrollLeft = 0;
          }
        }
      }, 2000);
    };

    startScrolling();

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid>
      <div
        ref={listRef}
        style={{
          display: 'flex',
          overflowX: 'hidden',
          scrollBehavior: 'smooth'
        }}
      >
        {brandLogos.map((logo, index) => (
          <Col key={index} style={{ flex: '0 0 auto' }}>
            <a href={externalLinks[index]} target="_blank" rel="noopener noreferrer">
              {/* External link will be added here */}
              <Card
                style={{
                  width: '200px',
                  height: '150px',
                  backgroundColor: 'transparent',
                  border: 'none'
                }}
              >
                <Card.Img
                  variant="top"
                  src={logo}
                  style={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'contain'
                  }}
                />
              </Card>
            </a>
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default CardCarousels;
