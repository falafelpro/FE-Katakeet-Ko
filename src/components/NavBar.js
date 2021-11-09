import React from "react";
import { observer } from "mobx-react";

// Components
import Signin from "./Signin";
import Signup from "./Signup";

// Store
import authStore from "../stores/authstore";

// Styling
import { Navbar, Container, Nav, Button } from "react-bootstrap";
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
            {/* Replace &nbsp; with proper styling */}
            &nbsp; Katakeet Ko.
          </Navbar.Brand>
          <Nav>
            {authStore.user ? (
              <>
                <h4 className="fontcolor">
                  Welcome, {authStore.user.username}
                </h4>
                &nbsp;
                <Button onClick={authStore.signout} variant="outline-danger">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                {/* Q: Is the label adding styling? */}
                <label>
                  <Signin />
                </label>
                &nbsp;
                <label>
                  <Signup />
                </label>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default observer(NavBar);
