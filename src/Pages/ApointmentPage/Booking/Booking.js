import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookignModal/BookingModal";

const Booking = (props) => {
  const { name, time, space } = props.data;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{ py: 4, textAlign: "center" }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h6"
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" component="div">
            {time}
          </Typography>
          <Typography variant="h6" component="div">
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleOpen} sx={{ my: 3 }} variant="contained">
            Book Available
          </Button>
        </Paper>
      </Grid>

      <BookingModal
        date={props.date}
        handleClose={handleClose}
        data={props.data}
        open={open}
      ></BookingModal>
    </>
  );
};

export default Booking;
