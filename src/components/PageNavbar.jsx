import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../styles/PageNavbar.css";
function PageNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <button className="button-53">THE PURPO</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/pride-petsy">Home</Nav.Link>
            <Nav.Link href="/pride-petsy/products">shop</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
