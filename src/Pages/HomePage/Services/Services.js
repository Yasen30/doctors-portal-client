import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Service from "../Service/Service";
import { Container, Typography } from "@mui/material";

const Services = () => {
  const services = [
    {
      name: "Fluoride Treatment",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish",
      img: "https://i.ibb.co/qD1yypc/fluoride.png",
    },
    {
      name: "Cavity Filling",
      description:
        "Dental restoration, dental fillings, or simply fillings, are treatments used to restore the function, integrity, and morphology of missing tooth structure resulting from caries or external trauma as well as to the replacement of such structure supported by dental implants.",
      img: "https://i.ibb.co/YdmHJqt/cavity.png",
    },
    {
      name: "Teeth Whitening",
      description:
        "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth.Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.",
      img: "https://i.ibb.co/RNqPTR2/whitening.png",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "success.main" }}
          variant="h6"
          gutterBottom
          variant="h6"
          component="div"
        >
          Our Services
        </Typography>
        <Typography
          sx={{ fontWeight: 600, m: 5 }}
          variant="h4"
          gutterBottom
          variant="h4"
          component="div"
        >
          Services Our Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((data) => (
            <Service key={data.name} data={data}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
