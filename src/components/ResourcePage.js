import React, { useState } from "react";
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
import LoginPage from "./LoginPage";
import Sidebar from "./Sidebar";

console.log("***Resource Page***");
console.log("Entering resource page...");

const ResourcePage = (props) => {
  console.log("Inside resource page...");

  console.log(props);
  const tokenFromApp = props.tokenFromApp;
  console.log("Token from App: ", tokenFromApp);

  return (
    <Container fluid>
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
              <tr>
                <td>Resource 1</td>
                <td>00 00 00</td>
              </tr>
              <tr>
                <td>Resource 2</td>
                <td>01 00 00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <LoginPage />
    </Container>
  );
};

export default ResourcePage;
