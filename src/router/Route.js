import React from "react";
// import { RootState } from "app/store";
// import { useSelector } from "react-redux";
import { Navigate, RouteProps } from "react-router";

// const Wrapper = (props: any) => {
//   const { isPrivate, component: Component } = props;
//   const user = useSelector((state: RootState) => state.user);

//   if (!user || (user && !user.token && isPrivate))
//     return <Redirect to="/login" />;
//   return <Component />;
// };

export const BaseRoute = ({children, redirectTo}) => {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
