import * as React from "react";
import Grid from "@mui/material/Grid";
import Calender from "../../Calendar/Calender";
import MyApointment from "../MyApointment/MyApointment";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <Calender date={date} setDate={setDate}></Calender>
      </Grid>
      <Grid item xs={12} sm={7}>
        <MyApointment date={date} setDate={setDate}></MyApointment>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
