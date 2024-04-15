import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { formatDate } from "../utils/formatDate";

function Appointment({ id, date, time, status }) {
  const statusColor = status === "active" ? "green" : "red";
  const isCancelled = status === 'cancelled';
  
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Appointment #{id}</Card.Title>
          <Card.Text>
            <strong>Date:</strong> {formatDate(date)}
            <br />
            <strong>Time:</strong> {time}
            <br />
            <strong>Status:</strong> <span style={{ color: statusColor }}>{status}</span>
          </Card.Text>
          <Button variant="secondary" disabled={isCancelled}>
            Cancel Appointment
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Appointment;
