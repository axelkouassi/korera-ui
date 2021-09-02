import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { PersonCircle, QuestionCircle } from "react-bootstrap-icons";
const Header = () => {
  return (
    // <header className="App-header">
    <Navbar
      bg="light"
      /* fixed="top" */
      class="navbar fixed-top navbar-light bg-light "
      /* justify-content-between="true"
      expand="lg" */
    >
      <div class="container-fluid">
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
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto my-2 my-lg-0 ">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                <PersonCircle />
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                <QuestionCircle />
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    //</header> */}
  );
};

export default Header;
