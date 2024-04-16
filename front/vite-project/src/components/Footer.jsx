import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row className="mt-5">
      <Col>
        <p className="text-center">
          © {new Date().getFullYear()} Henry Bank. All rights reserved.
        </p>
      </Col>
    </Row>
  );
}

export default Footer;
