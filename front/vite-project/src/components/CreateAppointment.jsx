import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/formatDate";
import { useDispatch } from "react-redux";
import { addUserAppointment } from "../redux-toolkit/userSlice";

const CreateAppointment = () => {
  const userId = useSelector((state) => state.user.user.id);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // console.log(userId);
  // console.log(user.user.id);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const isValidTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    return hour >= 10 && hour < 15;
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const todayLocaleDateString = new Date().toLocaleDateString();
    const today = new Date(todayLocaleDateString);
    const selectedDate = new Date(date);

    if (!date || selectedDate < today || !isWeekday(selectedDate)) {
      setError("Please select a valid weekday date from today onwards.");
      return;
    }

    if (!isValidTime(time)) {
      setError("Appointment time must be between 10:00 and 14:59.");
      return;
    }

    if (!description) {
      setError("Please provide a description for the appointment.");
      return;
    }

    try {
      // console.log(formatDate(selectedDate), time, description, userId);
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          date: formatDate(selectedDate),
          time,
          description,
          userId,
        }
      );
      alert("Appointment scheduled successfully!");
      //agregar el appointment al state
      const newAppointment = {
        id: response.data.id,
        date: response.data.date,
        time: response.data.time,
        description: response.data.description,
        status: response.data.status,
      };
      dispatch(addUserAppointment(newAppointment));
      setDate(null);
      setTime("");
      setDescription("");
    } catch (error) {
      setError("An error occurred while scheduling the appointment.");
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Create Appointment</h2>
          <span className="text-center">
            Please schedule your appointment. Remember that our business hours
            are from 10 am to 3 pm.
          </span>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={tomorrow}
                filterDate={isWeekday}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Select a time"
                required
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a description"
                required
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

            <div className="text-center">
              <Button variant="secondary" type="submit">
                Schedule Appointment
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAppointment;
