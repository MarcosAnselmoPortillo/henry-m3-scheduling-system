import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { validate } from "../utils/validate";

const Register = () => {
  const initialUserData = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialUserData);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const areAllFieldsCompleted = () => {
    return (
      userData.name &&
      userData.email &&
      userData.birthdate &&
      userData.nDni &&
      userData.username &&
      userData.password
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (!areAllFieldsCompleted()) {
      setError({ general: "Por favor, complete todos los campos" });
      return;
    }

    try {
      // Realizar la petición POST al servidor
      setIsLoading(true);
      console.log(userData);
      const { name, email, birthdate, nDni, username, password } = userData;
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          name,
          email,
          birthdate,
          nDni: Number(nDni), // Convertir nDni a número
          username,
          password,
        }
      );

      // Manejar la respuesta exitosa
      setSuccess("Registro exitoso");
      setError({});
      setUserData(initialUserData);
      console.log(response.data);
    } catch (err) {
      // Manejar el error
      if (err.response && err.response.data) {
        setError(
          //   err.response.data.errors ||
          { general: err.response.data }
        );
      } else if (err.request) {
        setError({ general: "No se pudo establecer conexión con el servidor" });
      } else {
        setError({ general: "Error al registrar el usuario" });
      }
      setSuccess("");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedUserData = { ...userData, [name]: value };
    setUserData(updatedUserData);

    const validationErrors = validate(updatedUserData);
    setError(validationErrors);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Container>
        <h1 className="text-center mb-4">Sing Up</h1>
        <Row className="justify-content-center">
          <Col md={6}>
            {Object.keys(error).length > 0 && (
              <Alert variant="danger">
                {error.general && <p>{error.general}</p>}
                {error.name && <p>{error.name}</p>}
                {error.email && <p>{error.email}</p>}
                {error.birthdate && <p>{error.birthdate}</p>}
                {error.nDni && <p>{error.nDni}</p>}
                {error.username && <p>{error.username}</p>}
                {error.password && <p>{error.password}</p>}
              </Alert>
            )}

            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name and surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name and surname"
                  value={userData.name}
                  name="name"
                  onChange={handleInputChange}
                />
                {error.name && (
                  <Form.Text className="text-danger">{error.name}</Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  value={userData.email}
                  name="email"
                  onChange={handleInputChange}
                />
                {error.email && (
                  <Form.Text className="text-danger">{error.email}</Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId="formBirthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control
                  type="date"
                  value={userData.birthdate}
                  name="birthdate"
                  onChange={handleInputChange}
                />
                {error.birthdate && (
                  <Form.Text className="text-danger">
                    {error.birthdate}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId="formNDni">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="99999999"
                  placeholder="Enter your ID number"
                  value={userData.nDni}
                  name="nDni"
                  onChange={handleInputChange}
                />
                {error.nDni && (
                  <Form.Text className="text-danger">{error.nDni}</Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={userData.username}
                  name="username"
                  onChange={handleInputChange}
                />
                {error.username && (
                  <Form.Text className="text-danger">
                    {error.username}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={userData.password}
                  name="password"
                  onChange={handleInputChange}
                />
                {error.password && (
                  <Form.Text className="text-danger">
                    {error.password}
                  </Form.Text>
                )}
              </Form.Group>

              <Button
                variant="secondary"
                type="submit"
                disabled={!areAllFieldsCompleted() || isLoading}
              >
                {isLoading ? "Signing up..." : "Sing up"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
