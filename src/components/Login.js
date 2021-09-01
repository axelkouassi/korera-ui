import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container fluid>
      <div id="login">
        <Row>
          <Col>
            <h1>Login</h1>
            <br />
          </Col>
        </Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br />
          <Button className="btn-lg btn-block" variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Group controlId="formBasicCheckbox">
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
