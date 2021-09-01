import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
const Header = () => {
  return (
    // <header className="App-header">
    <Navbar
      bg="light"
      /* fixed="top" */
      justify-content-between
      expand="lg"
    >
      <Navbar.Brand>
        <Link to="/">
          <img
            src="/Capture.JPG"
            fluid
            className="d-inline-block align-top"
            alt="Resource Management"
            width="200"
            height="200"
            style={({ maxWidth: "100%" }, { width: "50%" }, { height: "auto" })}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto my-2 my-lg-0 ">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Icon Login</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Icon Project Description</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    //</header> */}
  );
};

export default Header;
