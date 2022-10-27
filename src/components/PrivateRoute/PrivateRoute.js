/** @format */

import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
