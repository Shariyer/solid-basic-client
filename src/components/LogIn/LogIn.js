/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  const handleForm = (event) => {
    const form = event.target;
    const fullname = form.fullName.value;
    const photoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="mt-5">
      <Form className="w-50 mx-auto bg-dark bg-opacity-25 p-5 shadow rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
        </Form.Group>

        <span className=" d-flex justify-content-center">
          <Button className="px-5" variant="outline-dark" type="submit">
            Log In
          </Button>
        </span>
        <li>
          <small>
            New to this site?? <NavLink to="/register">Register</NavLink>
          </small>
        </li>
      </Form>
    </div>
  );
};

export default LogIn;
