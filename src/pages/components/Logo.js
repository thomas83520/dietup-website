import { Box, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

//assets & icons
import LogoImage from "../../assets/logo_7.svg";

export default function Logo() {
  const history = useHistory();
  return (
    <Box display="flex" alignItems="center">
      <Box
        component="img"
        onClick={()=>history.push("/")}
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 50, md: 50 },
          maxWidth: { xs: 50, md: 50 },
        }}
        alt="Logo"
        src={LogoImage}
      />
      <Typography variant="h4" component="h1">DietUp!</Typography>
    </Box>
  );
}
