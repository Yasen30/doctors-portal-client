import { Container, Grid } from "@mui/material";
import React from "react";
import Calender from "../../Calendar/Calender";

const ApointmentHeader = ({ date, setDate }) => {
  console.log(date);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="400" src="https://i.ibb.co/vqFTJG2/chair.png" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApointmentHeader;
