import { ThemeProvider } from "@emotion/react";
import { Box, Typography, Button, responsiveFontSizes } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { formuleTheme } from "../../constants";

export default function TarifsItem({
  nom,
  subtitle,
  prix,
  prixnumber,
  link,
  subtitlePrix,
  engagementDuree,
  asPromo,
  promo,
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
      {asPromo ? (
        <Box>
          <Typography
            variant="body1"
            pt={2}
            sx={{ textDecoration: "line-through" }}
          >
            {prix}
          </Typography>
          <Typography color="red" variant="h4" pt={1} sx={{ fontWeight: 900 }}>
            {`${parseInt(prixnumber) * (1 - parseInt(promo[0].value) / 100)}€`}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h5" pt={2}>
          {prix}
        </Typography>
      )}
      {engagementDuree > 0 ? (
        asPromo ? (
          <Typography variant="subtitle2" pt={1}>{`soit ${((prixnumber/engagementDuree)* (1 - parseInt(promo[0].value) / 100)).toFixed(2)}€/mois`}</Typography>
        ) : (
          <Typography variant="subtitle2" pt={1}>
            {subtitlePrix}
          </Typography>
        )
      ) : (
        <Typography variant="subtitle2" pt={1}>
          {subtitlePrix}
        </Typography>
      )}
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
