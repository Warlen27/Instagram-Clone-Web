import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const isLogged = localStorage.getItem("userId");
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
