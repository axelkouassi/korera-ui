import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import {
  Justify,
  LayoutSplit,
  PlusSquareFill,
  Search,
} from "react-bootstrap-icons";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";

console.log("***Resource Page***");
console.log("Entering resource page...");

const ResourcePage = (props) => {
  console.log("Inside resource page...");

  console.log(props);
  const tokenFromApp = props.tokenFromApp;
  console.log("Token from App: ", tokenFromApp);

  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let data = [];

  const getRequest = () => {
    console.log("Inside get request");

    console.log("Inside axios get request");

    // const axios = require("axios");

    axios.defaults.baseURL = "http://localhost:8080/korera/resource";

    axios
      .get("/getresources", {
        headers: {
          Authorization: "Bearer " + tokenFromApp,
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log("Inside first then()");
        console.log("Resource response: ", res);
        if (res.data !== null) {
          setIsLoading(false);
          setResources(res.data);
          console.log("Resource data: ", res.data);
        }
        data = res.data;
        // history.replace("/resource");
      })
      .catch(function (error) {
        // handle error
        console.log("Inside catch error");
        console.log("Error message: ", error.message);
        console.log("Error response data: ", error.response.data);
        console.log(
          "Error response data message: ",
          error.response.data.message
        );
        console.log("Error caught: ", error);
        console.log("Error response status: ", error.response.status);
        console.log("Error response headers: ", error.response.headers);
      })
      .then(function () {
        // always executed
        console.log("Inside then() that always execute");
      });
  };

  useEffect(() => {
    console.log("Inside  useEffect()");
    getRequest();
    console.log("axiosgetRequest: ", getRequest());
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Container fluid>
      {console.log("Resource data", resources)}
      <Row>
        <Col xs={1} id="sidebar-wrapper">
          <Sidebar />{" "}
        </Col>
        {console.log("Inside return()...")}{" "}
        <Col xs={11} id="page-content-wrapper">
          <h1 className="fixed">Resource Page</h1>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="table-secondary fixed" colSpan="2" fluid>
                  <Row>
                    <Col>
                      <Form className=" input-group w-50 d-flex">
                        <FormControl
                          className="form-control"
                          type="search"
                          placeholder="keyword"
                          //   className="mr-2"
                          aria-label="Search"
                          aria-labelledby="basic-addon1"
                        />
                        <span
                          className="input-group-text btn btn-secondary"
                          id="basic-addon1"
                          variant="outline-success"
                          color="#ec641c"
                          style={{ backgroundColor: "#ec641c" }}
                        >
                          <Search
                            className="bi bi-search"
                            fill="white"
                            height="18"
                            width="18"
                            justify-content-between="true"
                          />
                        </span>
                      </Form>
                    </Col>
                    <Col>Resource Catalog</Col>
                    <Col>
                      <Dropdown /* id="dropdown-basic-button" */>
                        <Dropdown.Toggle variant="link" bsPrefix="p-0">
                          <PlusSquareFill
                            /* className="bi bi-plus-square fill" */
                            fill="#ec641c"
                            width="25"
                            height="25"
                            /* justify-content-between="true" */
                            style={{
                              backgroundColor: "white",
                              borderRadius: "0px",
                            }}
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/row">
                            <Justify height="20" width="20" /> Add Row
                          </Dropdown.Item>
                          <Dropdown.Item href="#/column">
                            <LayoutSplit height="16" width="16" /> Add Column
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </th>
              </tr>
              <tr className="bg-light">
                <th>RESOURCE NAME</th>
                <th>RESOURCE CODE</th>
              </tr>
            </thead>
            <tbody bordered hover>
              {resources.map((resource, index) => {
                return (
                  <tr key={index}>
                    <td>{resource.resourceName}</td>
                    <td>{resource.resourceCode}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ResourcePage;
