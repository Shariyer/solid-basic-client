/** @format */

import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";

const Register = () => {
  const { CreateUser, UpdateUserProfile } = useContext(authContext);
  // const [error, setError] = useState('');
  const [termsAccept, setTermsAccept] = useState(false);
  // navigate hook
  const navigate = useNavigate();
  // location hook
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // handleCheckbox
  const handleCheckbox = (event) => {
    setTermsAccept(event.target.checked);
  };
  // handleFormRegister
  const handleFormRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(fullName, photoURL, email, password);
    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("registered with E&P" + user);
        form.reset();
        handleUpdateUserProfile(fullName, photoURL);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e.message);
      });
  };
  const handleUpdateUserProfile = (fullName, photoURL) => {
    const profile = {
      displayName: fullName,
      photoURL: photoURL,
    };
    UpdateUserProfile(profile)
      .then(() => {})
      .catch((e) => {
        console.error(e);
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
            required
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
          <Form.Check
            type="checkbox"
            onClick={handleCheckbox}
            label={
              <>
                Accept{" "}
                <NavLink className="fw-bold" to="/register">
                  Terms & Conditions
                </NavLink>
              </>
            }
          />
        </Form.Group>
        <span className=" d-flex justify-content-center">
          <Button
            className="px-5"
            variant="outline-dark"
            type="submit"
            disabled={!termsAccept}
          >
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
