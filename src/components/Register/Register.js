/** @format */

import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";

const Register = () => {
  const { CreateUser } = useContext(authContext);
  const navigate = useNavigate();
  const handleFormRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(fullName, photoURL, email, password);
    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("registered with E&P" + user);
        form.reset();
        navigate("/");
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleFormRegister}
        className="w-75 mx-auto bg-dark bg-opacity-25 p-5 shadow rounded border"
      >
        <h2 className="text-center">Registration</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter Your full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter Your PhotoURL email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Terms & Condition" />
        </Form.Group>
        <span className=" d-flex justify-content-center">
          <Button className="px-5" variant="outline-dark" type="submit">
            Register
          </Button>
        </span>
        <li>
          <small>
            Already have an Account?? <NavLink to="/login">LogIn</NavLink>
          </small>
        </li>
      </Form>
    </div>
  );
};

export default Register;
