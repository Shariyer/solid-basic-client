/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  //   const { user, LogOut } = useContext(AuthContext);
  //   const handleLogOut = () => {
  //     LogOut()
  //       .then(() => {
  //         console.log("user logged out");
  //       })
  //       .catch((error) => console.error(error.message));
  //   };
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
          <Navbar.Brand> Solid Basic</Navbar.Brand>
          <img className="img-fluid" src="favicon.png" alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/courses">Courses</Nav.Link>
              <Nav.Link to="/faq">FAQ</Nav.Link>
              {/* {user?.email && (
                <>
                  <Nav.Link className="text-white px-5">Welcome!!</Nav.Link>
                  <p className="text-white mt-2">{user?.displayName}</p>
                </>
              )} */}
            </Nav>
            <Nav>
              {/* {user?.displayName ? (
                <Nav.Link onClick={handleLogOut} href="">
                  Log Out
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link href="">LogIn</Nav.Link>
                  <Nav.Link href="">Register</Nav.Link>
                </>
              )} */}
            </Nav>
            <div className="d-lg-none">{/* <Categores /> */}</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
