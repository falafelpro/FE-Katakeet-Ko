import React from "react";
import { Navbar, Container } from "react-bootstrap";
import NavLogo from "../assets/wChick.png";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="NavLogo"
              src={NavLogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            &nbsp; Katakeet Ko.
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
