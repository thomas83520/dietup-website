import { Box, Typography } from "@mui/material";
import React from "react";

export default function FonctionnaliteItem({ image, nom, description,direction }) {
  return (
    <Box
      display={{ xs: "flex", md: "block" }}
      flexDirection={{xs:direction,md:"none"}}
      alignItems="center"
      justifyContent="center"
      textAlign={{md:"center"}}
    >
      <Box
        component="img"
        alt="ImageItem"
        py={2}
        sx={{ minHeight: {md:"210px"}, maxHeight: {xs:"150px",md:"210px"},width: {xs:"300px",md:"100%"} }}
        src={image}
      />
      <Box>
        <Typography variant="h6">{nom}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}
