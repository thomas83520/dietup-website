import { Divider, Box, Typography, Link } from "@mui/material";
import React from "react";

import {
  Link as RouterLink,
} from "react-router-dom";


export default function Footer() {
  return (
    <Box
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "relative" }}
      mt="auto"
      textAlign="center"
    >
      <Divider />
      <Box display="flex" justifyContent="space-between" height="80px" p={4}>
        <Typography variant="h5">DietUp!</Typography>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="subtitle2">Copyright @DietUp!2022</Typography>
          <Link component={RouterLink} to="/terms" color="inherit" underline="hover">
            <Typography variant="subtitle2">Mentions légales & CGV</Typography>
          </Link>
        </Box>
      </Box>

      <Typography variant="caption">
        Design and made by :{" "}
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/thomas-arnoux/"
          underline="hover"
        >
          Arnoux Thomas
        </Link>
      </Typography>
    </Box>
  );
}
