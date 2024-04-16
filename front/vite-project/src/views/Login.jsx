import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });

      console.log(response.data);
      if (response.data.login) {
        setUserData(response.data.user);
        setShowModal(true);
        setIsAuthenticated(true); // Establecer isAuthenticated como true después de un inicio de sesión exitoso
      } else {
        setError("Nombre de usuario o contraseña inválidos");
      }
    } catch (error) {
      if (error.response.data.error === "Invalid Username or Password") {
        setError("Invalid Username or Password");
      } else {
        console.log(error.response.data.error);
        setError("Ocurrió un error en el servidor");
        console.log(error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Container>
          <h1 className="text-center mb-4">Login</h1>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="secondary" type="submit" disabled={username === "" || password === ""}>
                  Login
                </Button>
              </Form>

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>¡Welcome!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {userData && (
                    <p>
                      Hi, <strong>{userData.name}</strong>. You have successfully logged in.
                    </p>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal} >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
