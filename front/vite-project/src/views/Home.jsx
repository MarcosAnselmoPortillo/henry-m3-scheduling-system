import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import homeImage from "../assets/homeImage.jpg";

const HomePage = () => {
  return (
    <Container fluid className="home-page mx-auto w-70 mt-4">
      <Row className="hero-section justify-content-center">
        <Col md={4} className="hero-text">
          <h1>Welcome to Henry Bank</h1>
          <p>Your trusted bank for all your financial needs.</p>
        </Col>
        <Col md={4} className="hero-image">
          <Image src={homeImage} fluid />
        </Col>
      </Row>

      <Row className="features-section justify-content-center mt-5">
        <Col md={3}>
          <h3>Personal Banking</h3>
          <p>
            We offer a variety of banking products and services for individuals.
          </p>
        </Col>
        <Col md={3}>
          <h3>Business Banking</h3>
          <p>Customized financial solutions for businesses of all sizes.</p>
        </Col>
        <Col md={3}>
          <h3>Digital Banking</h3>
          <p>
            Access your accounts from anywhere with our online banking and
            mobile app.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
