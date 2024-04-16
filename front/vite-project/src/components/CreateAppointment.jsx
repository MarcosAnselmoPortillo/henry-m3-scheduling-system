import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAppointment = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const isValidTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    return hour >= 10 && hour < 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const today = new Date();
    const selectedDate = new Date(date);

    if (!date || selectedDate < today || !isWeekday(selectedDate)) {
      setError('Please select a valid weekday date from today onwards.');
      return;
    }

    if (!isValidTime(time)) {
      setError('Appointment time must be between 10:00 and 14:59.');
      return;
    }

    if (!description) {
      setError('Please provide a description for the appointment.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/appointments/schedule', {
        date: selectedDate,
        time,
        description,
      });
      alert('Appointment scheduled successfully!');
      setDate(null);
      setTime('');
      setDescription('');
    } catch (error) {
      setError('An error occurred while scheduling the appointment.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Create Appointment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={new Date()}
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