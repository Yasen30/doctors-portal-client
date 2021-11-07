import React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import Google from "../Google";

const Register = () => {
  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || "/home";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    user,
    setUser,
    isLoading,
    setIsLoading,
    emailPasswordCreate,
    updateUser,
    error,
    setError,
  } = UseAuth();
  const onSubmit = (data) => {
    emailPasswordCreate(data.email, data.password)
      .then((result) => {
        history.push(redirectUrl);
        setUser(result);
        setError("");
        updateUser(data.name);
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
            Resigter
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("name", { required: true })}
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              variant="standard"
            />
            {errors.name && (
              <p style={{ color: "red" }}>This field is required</p>
            )}
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Resigterd ? pls Login</Button>
            </NavLink>
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

export default Register;
