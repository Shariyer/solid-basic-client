/** @format */

import React from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="mx-auto">
        <div className="w-100">
          <Spinner
            className="fs-1 mx-lg-5 "
            animation="grow"
            variant="primary"
          />
          <Spinner
            className="fs-1 mx-lg-5 "
            animation="grow"
            variant="secondary"
          />
          <Spinner
            className="fs-1 mx-lg-5 "
            animation="grow"
            variant="success"
          />
          <Spinner
            className="fs-1 mx-lg-5 "
            animation="grow"
            variant="danger"
          />
          <Spinner
            className="fs-1 mx-lg-5 "
            animation="grow"
            variant="warning"
          />
          <Spinner className="fs-1 mx-lg-5 " animation="grow" variant="info" />
          <Spinner className="fs-1 mx-lg-5 " animation="grow" variant="dark" />
        </div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
