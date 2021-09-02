import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
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
    <Container fluid>
      <div id="login">
        <Row>
          <Col>
            <h3 class="h3 mb-3 fw-normal">Login</h3>
            <br />
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group class="form-floating" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Enter username" />
            <Form.Control.Feedback type="invalid">
              Username is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Form.Group class="form-floating" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Button className="btn-lg btn-block" variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Group class="checkbox mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <br />
          <Row>
            <Col>
              <Link to="/register">
                <Button variant="primary" type="submit">
                  sign up
                </Button>
              </Link>
            </Col>
            <Col>
              <Form.Text className="text-muted">
                <Link to="/register">Forgot password?</Link>
              </Form.Text>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
