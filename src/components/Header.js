import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { PersonCircle, QuestionCircle } from "react-bootstrap-icons";

console.log("***Header Navbar***");
console.log("Entering header...");

const Header = () => {
  console.log("Inside header");

  return (
    // <header className="App-header">
    <Navbar
      bg="light"
      fixed="top"
      className="navbar fixed-top navbar-light bg-light "
      /* justify-content-between="true" */
      /* expand="lg" */
    >
      {console.log("Inside header return()")}
      <div className="container-fluid">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/Capture.JPG"
              fluid="true"
              className="d-inline-block align-top"
              alt="Resource Management"
              width="200"
              height="200"
              style={{
                height:
                  "auto" /* maxWidth: "100%", width: "50%", height: "auto" */,
              }}
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Row>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto my-2 my-lg-0 ">
              <Col>
                <Nav.Item>
                  <Nav.Link href="/">
                    <PersonCircle />
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                  <Nav.Link href="/register">
                    <QuestionCircle />
                  </Nav.Link>
                </Nav.Item>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </div>
    </Navbar>
    //</header> */}
  );
};

export default Header;
