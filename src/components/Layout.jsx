import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./PageNavbar";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="container">
            <h1 className="text">¡Black Friday Up To 50% Off!</h1>
          </Col>
        </Row>
      </Container>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
