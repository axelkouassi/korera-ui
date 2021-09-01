import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <Container fluid>
      <Row>
        <header className="App-header">
          <nav>
            <ul>
              <Col>
                <li>
                  <Link to="/">Resource Management</Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link to="/">Icon Login</Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link>Icon Project Description</Link>
                </li>
              </Col>
            </ul>
          </nav>
        </header>
      </Row>
    </Container>
  );
};

export default Header;
