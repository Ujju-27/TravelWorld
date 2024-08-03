import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]

const quick__links2=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/contact',
    display:'Contact Us'
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
          <div className="logo">
            <img src={logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae.</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="https://wa.me/qr/2IVV5772LJS4H1"><i class="ri-whatsapp-line"></i></Link>
              </span>
              <span>
                <Link to="https://www.instagram.com/ujjawaltolia_2703"><i class="ri-instagram-line"></i></Link>
              </span>
              <span>
                <Link to="https://github.com/Ujju-27"><i class="ri-github-line"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-linkedin-fill"></i></Link>
              </span>
            </div>
          </div>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
            {
              quick__links.map((item,index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {
              quick__links2.map((item,index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Contact Us</h5>
          <ListGroup className="footer__quick-links">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span><i class="ri-map-pin-line"></i></span>Address:
              </h6>
              <p className="mb-0">Uttarakhand, India</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-mail-line"></i>
                </span>Email:
              </h6>
              <p className="mb-0">ujjawaltolia853@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span><i class="ri-phone-fill"></i></span>Phone No.:
              </h6>
              <p className="mb-0">+91 8077703173</p>
            </ListGroupItem>
          </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
          <p className="Copyright"> Copyright &copy; design and developed by Ujjawal. All rights reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;