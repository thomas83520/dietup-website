import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export default function TarifsItem({nom,subtitle,prix,link}) {
  const history = useHistory();
  return (
    <Box p={5} sx={{ border: 1, borderRadius: 5,maxWidth:{xs:"300px",md:"none"} }}>
      <Typography variant="h4">{nom}</Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
      <Typography py={2}>{prix}</Typography>
      <Button onClick={()=>history.push(`/inscription/${link}`)} variant="contained">Choisir cette formule</Button>
    </Box>
  );
}
