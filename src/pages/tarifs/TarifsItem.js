import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export default function TarifsItem({nom,subtitle,prix,link,subtitlePrix}) {
  const history = useHistory();
  return (
    <Box p={5} sx={{ border: 1, borderRadius: 5,maxWidth:{xs:"300px",md:"none"} }}>
      <Typography variant="h4">{nom}</Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
      <Typography variant="h6" pt={2}>{prix}</Typography>
      <Typography variant="subtitle1" pt={1}>{subtitlePrix}</Typography>
      <Button sx={{marginTop:2}} onClick={()=>history.push(`/inscription/${link}`)} variant="contained">Choisir cette formule</Button>
    </Box>
  );
}
