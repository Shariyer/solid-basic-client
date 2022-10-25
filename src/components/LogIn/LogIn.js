/** @format */

import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LogIn = () => {
  const { SignInEP, SignInWithG, SignInWithGithub } = useContext(authContext);
  const navigate = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("logged In" + email, "logged In" + password);

    SignInEP(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        form.reset();
        console.log("Logged in user", user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleSignInGoogle = () => {
    SignInWithG()
      .then((result) => {
        const user = result.user;

        navigate("/");
        console.log("log in with google successfully", user);
      })
      .catch((error) => console.error(error.message));
  };
  const handleSignInGitHub = () => {
    SignInWithGithub()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log("log in with github successfully", user);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="mt-5 container">
      <Form
        onSubmit={handleForm}
        className="w-75 mx-auto bg-dark bg-opacity-25 p-5 shadow rounded"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email address"
            required
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
        <div>
          <h3 className="text-center">Log In with</h3>
          <span className="d-flex  justify-content-evenly mt-3 ">
            <Button
              onClick={handleSignInGoogle}
              className=" px-3 py-4"
              variant="outline-dark"
            >
              <FaGoogle className=" fs-1" /> Google
            </Button>
            <Button
              onClick={handleSignInGitHub}
              className="px-3 py-4"
              variant="outline-dark"
            >
              <FaGithub className=" fs-1" /> GitHub
            </Button>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
