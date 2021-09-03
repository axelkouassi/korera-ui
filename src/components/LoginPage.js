import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";

console.log("***Login Page***");
console.log("Entering login page...");

const LoginPage = (props) => {
  console.log("Inside login page");

  const loginHandler = () => {};

  return (
    <section>
      <Container fluid id="login">
        {console.log("Inside login page return()")}
        <Row>
          <Col>
            <h3 className="h3 mb-3 fw-normal">Login</h3>
            <br />
          </Col>
        </Row>
        <LoginForm onClickLoginButton={loginHandler} />
      </Container>
    </section>
  );
};

export default LoginPage;
