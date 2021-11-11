import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import NavLogo from "../assets/wChick.png";
import Signup from "./Signup";
import Signin from "./Signin";
import authStore from "../stores/authstore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                alt="NavLogo"
                src={NavLogo}
                width="40"
                height="40"
                className="d-inline-block align-top navlogo-margin"
              />
            </Link>
            Katakeet Ko.
          </Navbar.Brand>
          <Nav>
            {authStore.user ? (
              <>
                <h4 className="fontcolor user-margin">
                  Welcome, {authStore.user.username}
                </h4>
                <Button onClick={authStore.signout} variant="outline-danger">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <label className="buttons-margin">
                  <Signin />
                </label>
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
