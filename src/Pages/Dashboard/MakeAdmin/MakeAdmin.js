import React from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import UseAuth from "../../../Hooks/UseAuth";

const MakeAdmin = () => {
  const { token } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["role"] = "admin";
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          swal("Good job!", "Your Aceount is Admin Now", "success");
          reset();
        }
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>make admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-search"
          {...register("email", { required: true })}
          sx={{ width: "75%", m: 1 }}
          placeholder="Enter Your Email"
          type="email"
          variant="standard"
        />
        {errors.email && <p style={{ color: "red" }}>This field is required</p>}

        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">
          submit
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
