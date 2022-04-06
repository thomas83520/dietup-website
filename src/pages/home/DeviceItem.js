import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
        <Typography p={2} variant="h6">{titre}</Typography>
      </Stack>

      <Typography variant="subtitle2">{description}</Typography>
    </Box>
  );
}
