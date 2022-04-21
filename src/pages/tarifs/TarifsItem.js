import { ThemeProvider } from "@emotion/react";
import { Box, Typography, Button, responsiveFontSizes } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { formuleTheme } from "../../constants";

export default function TarifsItem({
  nom,
  subtitle,
  prix,
  link,
  subtitlePrix,
}) {
  const history = useHistory();
  return (
    <Box
      p={5}
      sx={{ border: 1, borderRadius: 5, maxWidth: { xs: "300px", md: "none" } }}
    >
      <ThemeProvider theme={responsiveFontSizes(formuleTheme)}>
        <Typography variant="h4">{nom}</Typography>
      </ThemeProvider>
      <Typography variant="subtitle2">{subtitle}</Typography>
      <Typography variant="h5" pt={2}>
        {prix}
      </Typography>
      <Typography variant="subtitle2" pt={1}>
        {subtitlePrix}
      </Typography>
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => history.push(`/inscription/${link}`)}
        variant="contained"
      >
        Choisir cette formule
      </Button>
    </Box>
  );
}
