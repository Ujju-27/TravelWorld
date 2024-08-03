import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import NatureVid from "../assets/images/main.mp4";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourlist from "../components/FeaturedComp/FeaturedTourlist";
import experienceImg from "../assets/images/experience.png";
import Masonrygalley from "../components/Image gallery/Masonrygalley";
import Feedback from "../components/Testimonial/Feedback";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      {/* Opening Section */}
      <section>
        <Container>
          <SearchBar />
          <Row>
            <Col lg="6">
              <video autoPlay loop muted className="video-background">
                <source src={NatureVid} type="video/mp4" />
              </video>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creating{" "}
                  <span className="highlight">Memories...</span>
                </h1>
                <p>
                  "TravelWorld brings you the world at your fingertips. Explore
                  breathtaking destinations, discover hidden gems, and
                  experience unforgettable adventures. TravelWorld is
                  your ultimate travel companion..."
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" autoPlay loop />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Offer Section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we Serve...</h5>
              <h2 className="services__title">
                We offer our best Services....
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured Offer Section */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours...</h2>
            </Col>
            <FeaturedTourlist />
          </Row>
        </Container>
      </section>

      {/* Featured Experience Section */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With Our all Experience..
                  <br />
                  We will serve you...
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  natus suscipit et beatae, nam veniam autem non, voluptate
                  ipsum!
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Succesfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience...</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured  Gallery Section */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our Customers Tour Gallery...
              </h2>
            </Col>
            <Col lg="12">
              <Masonrygalley />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Testimonial Section */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Testimonials Customers Love..."} />
              <h2 className="testimonial__title">
                What our customers say about us...
              </h2>
            </Col>
            <Col lg="12">
              <Feedback />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured NewsLetter Section */}
      <NewsLetter />
    </>
  );
};

export default Home;
