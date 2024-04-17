import React, { useEffect } from "react";
import Appointment from "../components/Appointment";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import CreateAppointment from "../components/CreateAppointment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserAppointments } from "../redux-toolkit/userSlice";

function Appointments() {
  const userId = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.user.userAppointments);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        // console.log("response.data:", response.data.appointments);
        dispatch(setUserAppointments(response.data.appointments));
      } catch (error) {
        console.log("Error al obetener los datos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CreateAppointment />
      <Container>
        <h1 className="text-center mb-4">My Appointments</h1>
        {!appointments.length ? (
          <h2 className="text-center">No appointments found</h2>
        ) : (
          <Row>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                description={appointment.description}
                status={appointment.status}
              />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Appointments;
