import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  let accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return <Component />;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;