import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="register">
            <h1>Register</h1>
          </div>
          <br />
        </Col>
      </Row>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br />

        <Form.Group controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter mobile number" />
        </Form.Group>
        <br />
        <Button className="btn-lg btn-block" variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Group controlId="formBasicCheckbox">
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
  );
};

export default Register;
