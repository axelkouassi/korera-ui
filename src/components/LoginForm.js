import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

console.log("***Login Form***");
console.log("Entering login form...");

const LoginForm = (props) => {
  console.log("Inside login form");
  const [validated, setValidated] = useState(false);
  const usernameRef = useRef(); // username ref
  const passwordRef = useRef(); // password ref

  const handleSubmit = (event) => {
    console.log("Inside  handleSubmit");

    event.preventDefault();

    const enteredUsername = usernameRef.current.value; // user entered username
    const enteredPassword = passwordRef.current.value; // user entered password

    //Object to store all user's entered information
    const LoginInfo = {
      username: enteredUsername,
      password: enteredPassword,
    };

    console.log("Login info: ", LoginInfo);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    //Send user info data to APIs handler
    props.onClickLoginButton(LoginInfo);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {console.log("Inside login form return()")}
      <Form.Group className="form-floating" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          ref={usernameRef}
          required
          type="text"
          placeholder="Enter username"
        />
        <Form.Control.Feedback type="invalid">
          Username is required!
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Form.Group className="form-floating" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          required
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Button className="btn-lg btn-block" variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox">
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
  );
};

export default LoginForm;
