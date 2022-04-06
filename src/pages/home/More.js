import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export default function More() {
  const history = useHistory();
  return (
    <Box p={3} textAlign="center">
      <Typography variant="h4">
        Vous souhaitez en savoir d'avantages ?
      </Typography>
      <Box py={5} display="flex" justifyContent="space-evenly">
        <Button onClick={()=>history.push("/tarifs")} variant="contained" size="large">Tarifs</Button>
        <Button onClick={()=>history.push("/roadmap")} variant="contained" size="large">Fonctionnalités à venir</Button>
      </Box>
    </Box>
  );
}
