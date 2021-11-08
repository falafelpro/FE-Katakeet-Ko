import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import NavLogo from "../assets/wChick.png";
import Signup from "./Signup";
import Signin from "./Signin";
import authStore from "../stores/authstore";
import { observer } from "mobx-react";

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
