import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { subtitleTheme, policeTheme, titleTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
export default function More() {
  const history = useHistory();
  return (
    <Box p={3} textAlign="center">
      <ThemeProvider theme={responsiveFontSizes(titleTheme)}>
      <Typography variant="h4">
        Vous souhaitez en savoir d'avantage ?
      </Typography>
      </ThemeProvider>
      <Box py={5} display="flex" justifyContent="space-evenly">
        <Button onClick={()=>history.push("/tarifs")} variant="contained" size="large">Tarifs</Button>
        <Button onClick={()=>history.push("/roadmap")} variant="contained" size="large">Fonctionnalités à venir</Button>
      </Box>
    </Box>
  );
}
