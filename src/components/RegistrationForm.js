import { useRef } from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

console.log("***Registration Form***");
console.log("Entering registration form...");

const RegistrationForm = (props) => {
  console.log("Inside registration form");

  const [validated, setValidated] = useState(false);

  const usernameRef = useRef(); // username ref
  const emailRef = useRef(); // email ref
  const passwordRef = useRef(); // password ref
  const firstNameRef = useRef(); // first name ref
  const lastNameRef = useRef(); // last name ref
  const mobileNumberRef = useRef(); // username ref

  const handleSubmit = (event) => {
    console.log("Inside  handleSubmit");

    event.preventDefault(props);

    const enteredFirstName = firstNameRef.current.value; // user's entered first name
    const enteredLastName = lastNameRef.current.value; // user's entered last name
    const enteredUsername = usernameRef.current.value; // user's entered username
    const enteredEmail = emailRef.current.value; // user's entered email
    const enteredPassword = passwordRef.current.value; // user's entered password
    const enteredMobileNumber = mobileNumberRef.current.value; // user's entered mobile number

    //Object to store all user's entered information
    const UserInfo = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      phone: enteredMobileNumber,
      props,
    };

    console.log("User info: ", UserInfo);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    //Send user info data to APIs handler
    props.onClickRegisterButton(UserInfo);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {console.log("Inside registration form return()")}
      <Form.Group className="form-floating" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          ref={firstNameRef}
          required
          type="text"
          placeholder="Enter first name"
        />
        <Form.Control.Feedback type="invalid">
          First name is required!
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Form.Group className="form-floating" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          ref={lastNameRef}
          required
          type="text"
          placeholder="Enter last name"
        />
        <Form.Control.Feedback type="invalid">
          Last name is required!
        </Form.Control.Feedback>
      </Form.Group>
      <br />
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
      <Form.Group className="form-floating" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          ref={emailRef}
          required
          type="email"
          placeholder="Enter email"
        />
        <Form.Control.Feedback type="invalid">
          Valid email is required!
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

      <Form.Group className="form-floating" controlId="formBasicMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          ref={mobileNumberRef}
          type="text"
          placeholder="Enter mobile number"
        />
      </Form.Group>
      <br />
      <Button className="btn-lg btn-block" variant="primary" type="submit">
        Register
      </Button>
      <br />
      <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox">
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
  );
};

export default RegistrationForm;
