import React from "react";
import myAppointments from "../helpers/myAppointments";
import { useState } from "react";
import Appointment from "../components/Appointment";
import { Container, Row } from "react-bootstrap";

function Appointments() {
  const [appointments, setAppointments] = useState(myAppointments);
  return (
    <Container>
      <h1 className="text-center mb-4">My Appointments</h1>
      {!appointments.length ? (
        <h2 className="text-center">No appointments found</h2>
      ) : (
        <Row>
          {appointments.map((appointment,i) => (
            <Appointment
              key={appointment.id}
              id={++i}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
            />
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Appointments;
