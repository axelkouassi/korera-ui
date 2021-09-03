import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

console.log("***Login Page***");
console.log("Entering login page...");

const LoginPage = () => {
  console.log("Inside login page");

  const history = useHistory();

  const getRequest = (loginInfo) => {
    console.log("Inside post request");
    /* const api = axios.create({
      baseURL: "http://localhost:8080/korera/user",
    }); */

    console.log("Login info: ", loginInfo);

    const loginData = loginInfo;
    console.log("Inside axios get request");

    // const axios = require("axios");

    axios.defaults.baseURL = "http://localhost:8080/korera/user";

    axios
      .post("/login", loginData, {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log("Login response: ", res);
        console.log("Login data: ", res.data);
        history.replace("/register");
      })
      .catch(function (error) {
        // handle error
        console.log("Inside catch");
        console.log("Login data: ", loginData);
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

  const loginHandler = (loginInfo) => {
    console.log("Inside login handler");
    console.log("Login info: ", loginInfo);
    getRequest(loginInfo);
  };

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
