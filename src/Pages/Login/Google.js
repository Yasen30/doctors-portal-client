import React from "react";
import { Button } from "@mui/material";
import UseAuth from "../../Hooks/UseAuth";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Google = () => {
  const { gogleSignIn, setUser, setError, setIsLoading } = UseAuth();

  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location?.state?.from || "/home";

  const handleGoogle = () => {
    gogleSignIn()
      .then((result) => {
        history.push(redirectUrl);
        setError("");
        savedUser(result.user.displayName, result.user.email);
        setUser(result);
        swal("Good job!", "Your Aceount is sign in Now", "success");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  const savedUser = (name, email) => {
    const user = { name, email };
    axios.put("http://localhost:5000/users", user).then((response) => {
      console.log(response);
    });
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
