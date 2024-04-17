import axios from "axios";
import React, { useState } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cancelUserAppointment } from './../redux-toolkit/userSlice';

const CancelAppointmentButton = ({ isCancelled , id}) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCancelAppointment = async () => {
    try {
        const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
        //actualizar el estado
        dispatch(cancelUserAppointment(id));
        // console.log(response.data);
        console.log('Appointment cancelado');
        alert('Appointment canceled successfully');
        handleCloseModal();
    } catch (error) {
        if (error.response.data) {
            alert(error.response.data.message);
            console.log(error.response.data);
        } else {
            console.log(error);
        }
        
    }
  };

  return (
    <Col md={1}>
      <Button variant="secondary" disabled={isCancelled} onClick={handleShowModal}>
        Cancel
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to cancel the appointment? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel Operation
          </Button>
          <Button variant="danger" onClick={handleCancelAppointment}>
            Cancel Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default CancelAppointmentButton;