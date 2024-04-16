import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ourStoryImage from '../assets/ourStory.jpg';
import bankPeople from '../assets/bankPeople.jpg';

const About = () => {
  return (
    <Container fluid className="about-us-page mx-auto w-70 mt-1">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat lacus in felis faucibus, in lacinia velit vehicula.
            Phasellus eu mauris eget turpis facilisis congue. Donec at odio
            id elit feugiat facilisis. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Nulla facilisi.
          </p>
        </Col>
      </Row>

      <Row className="mt-2 justify-content-center">
        <Col md={4}>
          <Image
            src= {ourStoryImage}
            alt="About Us Image"
            fluid
          />
        </Col>
        <Col md={4}>
          <h2>Our Story</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Col>
      </Row>

      <Row className="mt-2 justify-content-center">
        <Col md={4}>
          <h2>Our Mission</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Col>
        <Col md={4}>
          <Image
            src={bankPeople}
            alt="Mission Image"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;