/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Terms = () => {
  return (
    <div className="container text-center">
      <h1>Our Terms and Conditions:</h1>
      <p className="text-danger fs-3">You must Register First</p>
      <p className="text-danger fs-3">
        Go back to{" "}
        <NavLink className="fw-bold" to="/register">
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default Terms;
