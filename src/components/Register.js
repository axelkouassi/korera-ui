import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div id="register">
              <h3 class="h3 mb-3 fw-normal">Register</h3>
            </div>
            <br />
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group
            class="form-floating"
            hasValidation
            controlId="formBasicFirstName"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter first name" />
            <Form.Control.Feedback type="invalid">
              First name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group
            class="form-floating"
            hasValidation
            controlId="formBasicLastName"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter last name" />
            <Form.Control.Feedback type="invalid">
              Last name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group
            class="form-floating"
            hasValidation
            controlId="formBasicUsername"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Enter username" />
            <Form.Control.Feedback type="invalid">
              Username is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group
            class="form-floating"
            hasValidation
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
              Valid email is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group
            class="form-floating"
            hasValidation
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />

          <Form.Group
            class="form-floating"
            hasValidation
            controlId="formBasicMobileNumber"
          >
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number" />
          </Form.Group>
          <br />
          <Button className="btn-lg btn-block" variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Group class="checkbox mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <br />
          <Row>
            <Col>
              <Link to="/">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Link>
            </Col>
            <Col>
              <Form.Text className="text-muted">
                <Link to="/">Already have an account?</Link>
              </Form.Text>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
