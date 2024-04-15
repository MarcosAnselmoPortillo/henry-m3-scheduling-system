import React, { useEffect } from "react";
import myAppointments from "../helpers/myAppointments";
import { useState } from "react";
import Appointment from "../components/Appointment";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/appointments");
        setAppointments(response.data);
      } catch (error) {
        console.log("Error al obetener los datos:", error);
      }
    };
    fetchData();
  }, []);
  
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
