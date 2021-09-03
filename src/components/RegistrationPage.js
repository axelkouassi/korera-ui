import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

console.log("***Registration Page***");
console.log("Entering Registratio page...");

const RegistrationPage = () => {
  console.log("Inside registration page");

  const history = useHistory();

  const postRequest = (userInfo) => {
    console.log("Inside get request");
    /* const api = axios.create({
      baseURL: "http://localhost:8080/korera/user",
    }); */

    console.log("Login info: ", userInfo);

    const registrationData = userInfo;
    console.log("Inside axios get request");

    // const axios = require("axios");

    axios.defaults.baseURL = "http://localhost:8080/korera/user";

    axios
      .post("/register", registrationData, {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log("Registration response: ", res);
        console.log("Regsitration data: ", res.data);
        history.replace("/");
      })
      .catch(function (error) {
        // handle error
        console.log("Inside catch");
        console.log("Registration data: ", registrationData);
        // console.log("Error message: ", error.message);
        console.log("Error response data: ", error.response.data);
        console.log(
          "Error response data message: ",
          error.response.data.message
        );
        console.log("Error caught: ", error);
        /* console.log("Error response status: ", error.response.status);
        console.log("Error response headers: ", error.response.headers); */
      })
      .then(function () {
        // always executed
        console.log("Inside then - always executed");
      });
  };

  const registrationHandler = (userInfo) => {
    console.log("Inside registration handler");
    console.log("Registration info: ", userInfo);
    postRequest(userInfo);
  };

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
