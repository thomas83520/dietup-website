import { Divider, Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "relative" }}
      mt="auto"
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
          <Typography>Copyright @ArnouxThomas2022</Typography>
          <Typography>CGV & CGU</Typography>
        </Box>
      </Box>
    </Box>
  );
}
