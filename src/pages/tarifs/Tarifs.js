import { Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import TarifsItem from "./TarifsItem";
import { useCollection } from "../../hooks/useCollections";

import { titleTheme, subtitleTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

export default function Tarifs() {
  const { documents, error } = useCollection("abonnement", null, [
    "order",
    "asc",
  ]);

  const { documents: promo, error: errorPromo } = useCollection(
    "coupon",
    ["isPublic", "==", true],
    null
  );

  return (
    <Box textAlign="center" px={2}>
      <ThemeProvider theme={responsiveFontSizes(titleTheme)}>
        <Typography variant="h2" py={3}>
          Tarifs
        </Typography>
      </ThemeProvider>
      <ThemeProvider theme={responsiveFontSizes(subtitleTheme)}>
        <Typography variant="h6">
          Tous les abonnement sont sans engagement
        </Typography>
      </ThemeProvider>

      {promo && promo.length > 0 && (
        <Box>
          <Typography
            color="red"
            pt={2}
            variant="h4"
          >{`${promo[0].motif} : ${promo[0].value}% de réduction à vie!`}</Typography>
          <Typography  color="red"
            pt={1}
            variant="h4">{`Avec le code : ${promo[0].code}`}</Typography>
        </Box>
      )}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems="center"
        justifyContent="center"
        py={3}
      >
        {documents &&
          documents.map((doc) => (
            <TarifsItem
              key={doc.id}
              nom={doc.nom}
              subtitle={doc.subtitle}
              link={doc.link}
              priceId={doc.priceId}
              prix={doc.prix}
              prixnumber={doc.prixnumber}
              engagementDuree={doc.engagementDuree}
              subtitlePrix={doc.subtitlePrix}
              asPromo={promo && promo.length > 0 ? true : false}
              promo={promo}
            />
          ))}
      </Stack>
    </Box>
  );
}
