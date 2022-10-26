/** @format */

import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";
import Categories from "../Shared/Categories/Categories";

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
        className="bg-opacity-100"
        variant="dark"
      >
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <img className="img-fluid" src="favicon.png" alt="" />
            <Navbar.Brand className="fs-3"> Solid Basic</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
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
                to="/blog"
              >
                Blog
              </NavLink>
              {user?.uid && (
                <>
                  <Nav.Link className="text-white  px-5">Welcome!!</Nav.Link>
                  <Nav.Link className="text-white">
                    {user?.displayName}
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              {user?.uid ? (
                <div className="d-flex align-items-center">
                  <NavLink
                    className="text-decoration-none text-white px-4"
                    onClick={handleLogOut}
                    to="/login"
                  >
                    Log Out
                  </NavLink>
                  {user?.photoURL ? (
                    <Image
                      roundedCircle
                      style={{ height: 30 }}
                      src={user?.photoURL}
                    ></Image>
                  ) : (
                    <FaUserCircle className="text-white fs-1" roundedCircle />
                  )}
                </div>
              ) : (
                <>
                  <NavLink
                    className="text-decoration-none text-white px-5"
                    to="/login"
                  >
                    LogIn
                  </NavLink>
                  <NavLink
                    className="text-decoration-none text-white"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
            <div className="d-lg-none">
              <Categories />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
