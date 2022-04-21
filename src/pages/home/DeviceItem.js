import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { subtitleTheme,policeTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
export default function DeviceItem({ image, titre, description }) {
  return (
    <Box py={4}>
      <Stack direction="row" alignItems="center">
        <Box
          component="img"
          alt="Image device"
          src={image}
          sx={{
            width: "50px",
            height: "50px",
          }}
        />
        <ThemeProvider theme={responsiveFontSizes(subtitleTheme)}>
          <Typography p={2} variant="h5">
            {titre}
          </Typography>
        </ThemeProvider>
      </Stack>

      <Typography variant="subtitle2">{description}</Typography>
    </Box>
  );
}
