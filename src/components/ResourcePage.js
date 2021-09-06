import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Form, FormControl, Row, Table } from "react-bootstrap";
import {
  PlusLg,
  PlusSquare,
  PlusSquareFill,
  Search,
} from "react-bootstrap-icons";

console.log("***Resource Page***");
console.log("Entering resource page...");

const ResourcePage = () => {
  console.log("Inside resource page...");
  return (
    <Container fluid>
      {console.log("Inside return()...")} <h1>Resource Page</h1>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="table-secondary" colSpan="2" fluid>
              <Row>
                <Col>
                  <Form className=" input-group w-50 d-flex">
                    <FormControl
                      className="form-control"
                      type="search"
                      placeholder="keyword"
                      //   className="mr-2"
                      aria-label="Search"
                      aria-aria-describedby="basic-addon1"
                    />
                    <span
                      className="input-group-text btn btn-secondary"
                      id="basic-addon1"
                      variant="outline-success"
                    >
                      <Search className="bi bi-search" fill="currentColor" />
                    </span>
                  </Form>
                </Col>
                <Col>Resource Catalog</Col>
                <Col>
                  <PlusSquareFill
                    className="bi bi-plus-sqaure fill"
                    fill="currentColor"
                    width="22"
                    height="22"
                  />
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
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ResourcePage;
