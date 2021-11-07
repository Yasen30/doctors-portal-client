import { CircularProgress } from "@mui/material";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = UseAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
