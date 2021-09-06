import React from "react";
import {
  Col,
  Container,
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Form,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import {
  Columns,
  Justify,
  LayoutSplit,
  List,
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
