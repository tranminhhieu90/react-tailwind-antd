import React from "react";
import { Navigate,  } from "react-router";


export const BaseRoute = ({children, redirectTo}) => {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
