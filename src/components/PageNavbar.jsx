import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaOpencart } from "react-icons/fa";
import "../styles/PageNavbar.css";
function PageNavbar() {
  const isActive = (path) => {
    return window.location.pathname === path;
  };
  return (
    <Navbar id="nav-content" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <button className="button-53">THE PURPO</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center style-nav"
            navbarScroll
          >
            <Nav.Link
              className={`a ${isActive("/the-purpo") ? "active" : ""}`}
              href="/the-purpo"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`a ${isActive("/the-purpo/products") ? "active" : ""}`}
              href="/the-purpo/products"
            >
              Shop
            </Nav.Link>
            <Nav.Link
              className={`a ${isActive("/the-purpo/about") ? "active" : ""}`}
              href="/the-purpo/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`a ${isActive("/the-purpo/contact") ? "active" : ""}`}
              href="/the-purpo/contact"
            >
              Contact
            </Nav.Link>

            <div className="cart-icon">
              <Nav.Link href="/the-purpo/cart">
                <FaOpencart />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
