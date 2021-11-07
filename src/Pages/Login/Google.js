import React from "react";
import { Button } from "@mui/material";
import UseAuth from "../../Hooks/UseAuth";
import { useHistory, useLocation } from "react-router-dom";

const Google = () => {
  const { gogleSignIn, setUser, setError, setIsLoading } = UseAuth();

  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || "/home";

  const handleGoogle = () => {
    gogleSignIn()
      .then((result) => {
        history.push(redirectUrl);
        setError("");
        setUser(result);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <Button onClick={handleGoogle} variant="contained">
        Google Sign In
      </Button>
    </div>
  );
};

export default Google;
