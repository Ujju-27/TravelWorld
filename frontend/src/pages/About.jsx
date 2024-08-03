import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NatureVid from '../assets/images/footer.mp4';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col>
            <h2 className="about-title">About TravelWorld</h2>
            <video 
            autoPlay
            loop
            muted
            className="video-background">
            <source src={NatureVid} type="video/mp4" />
            </video>
            <p className="about-description">
              TravelWorld is a premier tour and travel project dedicated to providing the best travel experiences for our customers. Our mission is to make travel planning easy and enjoyable, offering a wide range of tours and travel packages to suit every need. Explore the world with us and create unforgettable memories!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
