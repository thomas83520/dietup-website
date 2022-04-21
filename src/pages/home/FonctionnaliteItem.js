import { Box, Typography } from "@mui/material";
import React from "react";

import { subtitleTheme, policeTheme, titleTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

export default function FonctionnaliteItem({
  image,
  nom,
  description,
  direction,
}) {
  return (
    <Box
      display={{ xs: "flex", md: "block" }}
      flexDirection={{ xs: direction, md: "none" }}
      alignItems="center"
      justifyContent="center"
      textAlign={{ md: "center" }}
    >
      <Box
        component="img"
        alt="ImageItem"
        py={2}
        sx={{
          minHeight: { md: "210px" },
          maxHeight: { xs: "150px", md: "210px" },
          width: { xs: "300px", md: "100%" },
        }}
        src={image}
      />
      <Box>
        <ThemeProvider theme={responsiveFontSizes(subtitleTheme)}>
          <Typography variant="h4">{nom}</Typography>
        </ThemeProvider>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}
