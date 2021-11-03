import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const bannerBg = {
  background: "url('https://i.ibb.co/g6KB30g/bg.png')",
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container style={bannerBg} className="banner">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ ...verticalCenter, textAlign: "left" }}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <p style={{ fontWeight: "300" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                doloribus ex ipsum recusandae officia quod et quidem corporis
                autem placeat!
              </p>
              <Button
                variant="contained"
                style={{ backgroundColor: "#5CE7ED" }}
              >
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img width="400" src="https://i.ibb.co/vqFTJG2/chair.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
