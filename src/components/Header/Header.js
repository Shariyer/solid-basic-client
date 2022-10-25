/** @format */

import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";

const Header = () => {
  const { user, LogOut } = useContext(authContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="mb-3 shadow w-100 mb-5">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="bg-opacity-75"
        variant="dark"
      >
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <img className="img-fluid" src="favicon.png" alt="" />
            <Navbar.Brand className="fs-3"> Solid Basic</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="text-decoration-none text-white mx-3" to="/">
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none text-white mx-3"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="text-decoration-none text-white mx-3"
                to="/faq"
              >
                FAQ
              </NavLink>

              <NavLink
                className="text-decoration-none text-white mx-3"
                to="/register"
              >
                Blog
              </NavLink>
              {user?.uid && (
                <>
                  <Nav.Link className="text-white px-5">Welcome!!</Nav.Link>
                  <p className="text-white mt-2">{user?.displayName}</p>
                </>
              )}
            </Nav>
            <Nav>
              {user?.uid ? (
                <div className="d-flex align-items-center">
                  <NavLink
                    className="text-decoration-none text-white"
                    onClick={handleLogOut}
                    to="/login"
                  >
                    Log Out
                  </NavLink>
                  <Image
                    roundedCircle
                    style={{ height: 30 }}
                    src={user?.photoURL}
                  ></Image>
                </div>
              ) : (
                <>
                  <Nav.Link href="/login">LogIn</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
            <div className="d-lg-none">{/* <Categores /> */}</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
