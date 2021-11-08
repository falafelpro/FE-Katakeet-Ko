import React from "react";
import { Navbar, Container } from "react-bootstrap";
import NavLogo from "../assets/wChick.png";

function KkNavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={NavLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Kakakeet Ko.
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default KkNavBar;
