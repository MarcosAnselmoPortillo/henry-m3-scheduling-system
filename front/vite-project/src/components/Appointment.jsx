import React from "react";
import { Col, Row } from "react-bootstrap";
import { formatDate } from "../utils/formatDate";
import CancelAppointmentButton from "./CancelAppointmentButton";

function Appointment({ id, date, time, status, description }) {
  const statusColor = status === "active" ? "green" : "red";
  const isCancelled = status === "cancelled";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "15px",
      }}
    >
      <Row className="mb-1">
        <Col md={2}>
          <strong>Date:</strong> {formatDate(date)}
        </Col>
        <Col md={2}>
          <strong>Time:</strong> {time}
        </Col>
        <Col md={4}>
          <strong>Description:</strong>{" "}
          {description && description.length > 40 ? (
            <span title={description}>{`${description.substring(
              0,
              40
            )}...`}</span>
          ) : (
            description
          )}
        </Col>
        <Col md={2}>
          <strong>Status:</strong>{" "}
          <span style={{ color: statusColor }}>{status}</span>
        </Col>
        <Col md={1}>
          <CancelAppointmentButton isCancelled={isCancelled} id={id} />
        </Col>
      </Row>
    </div>
  );
}

export default Appointment;
