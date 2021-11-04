import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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
  const handleBookingSubmit = (e) => {
    alert("submitting");
    e.preventDefault();
    handleClose();
  };
  const { name, time, space } = data;
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
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              id="standard-search"
              sx={{ width: "90%", m: 1 }}
              defaultValue={time}
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-search"
              sx={{ width: "90%", m: 1 }}
              placeholder="Enter Your Name"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-search"
              sx={{ width: "90%", m: 1 }}
              placeholder="Enter Your Phone Number"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-search"
              sx={{ width: "90%", m: 1 }}
              placeholder="Enter Your Email"
              type="search"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-search"
              sx={{ width: "90%", m: 1 }}
              placeholder="Enter Your Email"
              type="search"
              defaultValue={date.toDateString()}
              variant="standard"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
};

export default BookingModal;
