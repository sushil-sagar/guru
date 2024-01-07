// MyPage.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardImg.css"; // Import the CSS file

// Import images
import backgroundImage from '../assets/ptree.jpg';
import image1 from '../assets/Award.png';
import image2 from '../assets/handfree.png';
import image3 from '../assets/prob.png';

const MyPage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, height: '80vh' }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Card>
              <Card.Img src={image1} className="card-img1" />
              <Card.Body>
                <Card.Text className="card-text1">
                  Gurudev Electrical and Hardware thrives on exceptional resources, enabling unparalleled scalability and adaptability. Our precise organization ensures swift, versatile operations with minimal lead time, ensuring efficient product delivery. Exemplifying excellence, we're committed to seamless services, setting industry standards in every endeavor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Img src={image2} className="card-img1" />
              <Card.Body>
                <Card.Text className="card-text1">
                  Driven by expertise, Gurudev Electricals and Hardware excels in geysers, fans, led Lighting and hardware solutions. Our products set new benchmarks for reliability and efficiency. Customer satisfaction is our priority, offering seamless service and quality products. Choose Gurudev Electric for superior home solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Img src={image3} className="card-img1" />
              <Card.Body>
                <Card.Text className="card-text1">
                  With expertise and innovation, Gurudev Electricals and Hardware offers premier geysers, fans, led lighting and hardware. Our products redefine standards, ensuring reliability and efficiency. We prioritize customer satisfaction, providing seamless service from purchase to support. Experience quality living with Gurudev Electricals and Hardware.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPage;
