import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import TarifsItem from "./TarifsItem";
import { useCollection } from "../../hooks/useCollections";

export default function Tarifs() {
  const { documents, error } = useCollection("abonnement", null, [
    "order",
    "asc",
  ]);

  return (
    <Box textAlign="center" px={2}>
      <Typography variant="h2" py={3}>
        Tarifs
      </Typography>
      <Typography>
        Tous les abonnement sont renouvelés automatiquement
      </Typography>
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
              subtitlePrix={doc.subtitlePrix}
            />
          ))}
      </Stack>
    </Box>
  );
}
