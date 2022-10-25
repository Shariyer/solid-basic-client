/** @format */

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

const Register = () => {
  const handleForm = (event) => {
    const form = event.target;
    const fullname = form.fullName.value;
    const photoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div>
      <Form className="w-50 mx-auto bg-dark bg-opacity-25 p-5 shadow rounded border">
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
