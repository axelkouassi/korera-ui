import React, { Fragment, useEffect, useState } from "react";
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
  CheckCircleFill,
  Justify,
  LayoutSplit,
  PlusSquareFill,
  Search,
  XCircleFill,
} from "react-bootstrap-icons";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";

console.log("***Resource Page***");
console.log("Entering resource page...");

const ResourcePage = (props) => {
  console.log("Inside resource page...");

  /***
   * Token after succesful log in
   * */
  console.log(props);
  const tokenFromApp = props.tokenFromApp;
  console.log("Token from App: ", tokenFromApp);

  /****
   * variables to handle loading and display all the resources
   * with their name and code inside a table
   * */

  // data state variable defaulted to an empty array
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * variables to handle editable table to update resource name and code
   * */
  const [inEditName, setInEditName] = useState({
    status: false,
    rowKey: null,
  });

  const [inEditCode, setInEditCode] = useState({
    status: false,
    rowKey: null,
  });

  const [name, setName] = useState(null);
  const [code, setCode] = useState(null);

  /****
   * Code to load and display all the resources
   * with their name and code inside a table
   * */

  //Calling the back-end api with axios to get all the resources's name and code
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

  /**
   * Using useEffect react hook to get state of resources
   * and dispaly result on webpage
   * */
  useEffect(() => {
    console.log("Inside  useEffect()");
    getRequest();
    console.log("axiosgetRequest: ", getRequest());
  }, []);

  //If resources aren't loaded yet, display this text
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  /**
   * Code to handle editable table to update resource name and code
   * */

  /**
   * @param name - The name of the resource
   * @param currentName - The current name of the resource
   */
  const onEditName = ({ name, currentName }) => {
    setInEditName({
      status: true,
      rowKey: name,
    });
    setName(currentName);
  };

  /**
   * @param code - The code of the resource code
   * @param currentCode - The current codeof the resource
   */
  const onEditCode = ({ code, currentCode }) => {
    setInEditCode({
      status: true,
      rowKey: code,
    });
    setCode(currentCode);
  };

  //Code to update resource name
  const updateResourceName = ({ currentName, newName }) => {
    axios.defaults.baseURL =
      "http://localhost:8080/korera/resource/update/name";

    axios
      .post("/{currentName}/{newName}", {
        headers: {
          Authorization: "Bearer " + tokenFromApp,
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log("Inside update resource name first then()");
        console.log("Response Body: ", res);
        if (res.data !== null) {
          console.log("Response data: ", res.data);
        }
        // reset inEditName and resource name state values
        onCancelName();

        // fetch the updated data
        getRequest();
      })
      .catch(function (error) {
        // handle error
        console.log("Inside catch error");
        console.log("Error caught: ", error);
        if (error.message !== null) {
          console.log("Error message: ", error.message);
          console.log("Error response data: ", error.response.data);
          console.log(
            "Error response data message: ",
            error.response.data.message
          );
        }
        console.log("Error response status: ", error.response.status);
        console.log("Error response headers: ", error.response.headers);
      })
      .then(function () {
        // always executed
        console.log("Inside then() that always execute");
      });
  };

  /**
   * @param currentName -The current name of the resource
   * @param newName - The new name of the resource
   */
  const onSaveName = ({ currentName, newName }) => {
    updateResourceName({ currentName, newName });
  };

  const onCancelName = () => {
    // reset the inEditName state value
    setInEditName({
      status: false,
      rowKey: null,
    });

    // reset the unit price state value
    setName(null);
  };

  //Code to update resource code
  const updateResourceCode = ({ currentCode, newCode }) => {
    axios.defaults.baseURL =
      "http://localhost:8080/korera/resource/update/code";

    axios
      .post("/{currentCode}/{newCode}", {
        headers: {
          Authorization: "Bearer " + tokenFromApp,
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log("Inside update resource code first then()");
        console.log("Response Body: ", res);
        if (res.data !== null) {
          console.log("Response data: ", res.data);
        }
        // reset inEditCode and resource name state values
        onCancelCode();

        // fetch the updated data
        getRequest();
      })
      .catch(function (error) {
        // handle error
        console.log("Inside catch error");
        console.log("Error caught: ", error);
        if (error.message !== null) {
          console.log("Error message: ", error.message);
          console.log("Error response data: ", error.response.data);
          console.log(
            "Error response data message: ",
            error.response.data.message
          );
        }
        console.log("Error response status: ", error.response.status);
        console.log("Error response headers: ", error.response.headers);
      })
      .then(function () {
        // always executed
        console.log("Inside then() that always execute");
      });
  };

  /**
   * @param currentCode -The current code of the resource
   * @param newCode - The new code of the resource
   */
  const onSaveCode = ({ currentCode, newCode }) => {
    updateResourceCode({ currentCode, newCode });
  };

  const onCancelCode = () => {
    // reset the inEditCode state value
    setInEditCode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setCode(null);
  };

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
              {resources.map((resource) => {
                return (
                  <tr key={resource.resourceId}>
                    <td
                      key={resource.resourceName}
                      onFocus={() =>
                        setInEditName({
                          status: true,
                          rowKey: resource.resourceName,
                        })
                      }
                      onBlur={() => onCancelName()}
                    >
                      {inEditName.status &&
                      inEditName.rowKey === resource.resourceName ? (
                        <Fragment>
                          <CheckCircleFill fill="#ec641c" />{" "}
                        </Fragment>
                      ) : null}

                      {inEditName.status &&
                      inEditName.rowKey === resource.resourceName ? (
                        <Fragment>
                          <XCircleFill fill="#ec641c" />{" "}
                        </Fragment>
                      ) : null}

                      <input
                        type="text"
                        style={{
                          border: inEditName.status ? "#ec641c" : "none",
                          background: "transparent",
                          textAlign: "center",
                        }}
                        onBlur={() => console.log("Inside input field")}
                        onFocus={() => console.log("Outside input field")}
                        value={resource.resourceName}
                      />
                    </td>
                    <td
                      key={resource.resourceCode}
                      /* contentEditable="true" */
                      /* onBlur={() => console.log("Focus has been lost")}
                      onFocus={() => console.log("Focus is here")} */
                    >
                      <CheckCircleFill fill="#ec641c" />{" "}
                      <XCircleFill fill="#ec641c" />
                      {}
                      <input
                        type="text"
                        style={{
                          border: "none",
                          background: "transparent",
                          textAlign: "center",
                        }}
                        onBlur={() => console.log("Focus has been lost")}
                        onFocus={() => console.log("Focus is here")}
                        value={resource.resourceCode}
                      />
                    </td>
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
