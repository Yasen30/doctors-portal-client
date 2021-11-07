import React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Google from "../Google";

const Login = () => {
  // history , and location
  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || "/home";
  console.log(redirectUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // get value use Auth
  const {
    setUser,
    isLoading,
    setIsLoading,
    emailPasswordSignin,
    error,
    setError,
  } = UseAuth();
  const onSubmit = (data) => {
    emailPasswordSignin(data.email, data.password)
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
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email", { required: true })}
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
            />
            {errors.email && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
            <TextField
              sx={{ width: "75%", m: 1 }}
              {...register("password", { required: true })}
              id="standard-basic"
              label="Your Password"
              type="password"
              variant="standard"
            />
            {errors.password && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
          <Google></Google>
          {isLoading && <CircularProgress />}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/NN2yKSx/login.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
