import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" className="my-2">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
