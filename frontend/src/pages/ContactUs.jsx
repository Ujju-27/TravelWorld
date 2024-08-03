import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col>
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              For any queries, please email us at <a href="mailto:ujjawaltolia853@gmail.com">Email</a>.
            </p>
            <p className="contact-description">
              Our location: Uttarakhand, India.
            </p>
            <p className="contact-description"> 
              Copyright &copy; design and developed by Ujjawal. All rights reserved. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
