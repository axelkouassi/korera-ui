import { Col, Container, Row } from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";

console.log("***Registration Page***");
console.log("Entering Registratio page...");

const RegistrationPage = () => {
  console.log("Inside registration page");

  const registrationHandler = () => {};

  return (
    <section>
      {console.log("Inside registration page return()")}
      <Container fluid>
        <Row>
          <Col>
            <div id="register">
              <h3 className="h3 mb-3 fw-normal">Register</h3>
            </div>
            <br />
          </Col>
        </Row>
        <RegistrationForm onClickRegisterButton={registrationHandler} />
      </Container>
    </section>
  );
};

export default RegistrationPage;
