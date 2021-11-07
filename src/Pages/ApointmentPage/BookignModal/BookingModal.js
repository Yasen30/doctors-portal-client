import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import swal from "sweetalert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, data, handleClose, date }) => {
  const { name, time, space } = data;
  // get value form useAuth
  const { user } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit functon
  const onSubmit = (data) => {
    data["date"] = date.toLocaleDateString();
    data["servicesName"] = name;
    data["time"] = time;
    console.log(data);
    axios.post("http://localhost:5000/appointments", data).then((res) => {
      if (res.data.insertedId) {
        swal("Good job!", "Your Appointment is sucessfully added!", "success");
        handleClose();
      }
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="standard-search"
            sx={{ width: "90%", m: 1 }}
            defaultValue={time}
            type="search"
            variant="standard"
            disabled
          />

          {user?.displayName && (
            <TextField
              id="standard-search"
              {...register("name", { required: true })}
              sx={{ width: "90%", m: 1 }}
              defaultValue={user?.displayName}
              placeholder="Enter Your Name"
              type="search"
              variant="standard"
            />
          )}
          {errors.name && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <TextField
            id="standard-search"
            {...register("number", { required: true })}
            sx={{ width: "90%", m: 1 }}
            placeholder="Enter Your Phone Number"
            type="number"
            variant="standard"
          />
          {errors.number && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          {user?.email && (
            <TextField
              {...register("email", { required: true })}
              sx={{ width: "90%", m: 1 }}
              defaultValue={user?.email}
              id="standard-basic"
              placeholder="Enter Your Email"
              variant="standard"
            />
          )}
          {errors.email && (
            <p style={{ color: "red" }}>This field is required</p>
          )}

          <TextField
            id="standard-search"
            sx={{ width: "90%", m: 1 }}
            placeholder="Enter Your Email"
            type="search"
            defaultValue={date.toLocaleDateString()}
            variant="standard"
            disabled
          />
          <Button sx={{ width: "90%", m: 1 }} type="submit" variant="contained">
            submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
