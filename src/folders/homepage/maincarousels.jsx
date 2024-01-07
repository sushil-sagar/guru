import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Import your hero images
import image1 from '../assets/racold.jpg';
import image2 from '../assets/racold.jpg';
import image3 from '../assets/racold.jpg';
import image4 from '../assets/racold.jpg';
import image5 from '../assets/racold.jpg';

const HeroCarousel = () => {
  return (
    <Carousel interval={3000} pause={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
