import React from "react";

//Components
import FonctionnaliteItem from "./FonctionnaliteItem";
import { Box, Grid, Typography } from "@mui/material";

//assets
import JournalImage from "../../assets/Add-to-journal.svg";
import MessageImage from "../../assets/chat.svg";
import ObjectifsImage from "../../assets/Objectifs.svg";
import CoubresImages from "../../assets/courbes.svg";
import PhotosImages from "../../assets/photos.svg";
import DocumentsImage from "../../assets/documents.svg";

import { subtitleTheme, policeTheme, titleTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

export default function Fonctionnalite({ reference }) {
  return (
    <Box ref={reference} p={5} className="fonctionnalite">
      <ThemeProvider theme={responsiveFontSizes(titleTheme)}>
        <Typography sx={{ textAlign: "center" }} pb={5} variant="h3">
          Fonctionnalités
        </Typography>
      </ThemeProvider>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <FonctionnaliteItem
            nom="Journal alimentaire"
            direction="row"
            description="Chaque jour vos patients renseignent leurs repas ainsi que leur ressenti de la journée"
            image={JournalImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FonctionnaliteItem
            nom="Messages"
            direction="row-reverse"
            description="Utilisez le chat de l'application pour échangez avec vos patients entre les consultations"
            image={MessageImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FonctionnaliteItem
            nom="Objectifs"
            direction="row"
            description="L'application contient une page dédié aux objectifs à court et long termes fixé en consultation pour toujours gardé le cap"
            image={ObjectifsImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FonctionnaliteItem
            nom="Courbes de poids et mesures"
            direction="row-reverse"
            description="Un espace pour suivre son évolution sur un graphique"
            image={CoubresImages}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FonctionnaliteItem
            nom="Gallerie photo"
            direction="row"
            description="Permet aux patients de suivre en images leur évolution physique"
            image={PhotosImages}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FonctionnaliteItem
            nom="Documents"
            direction="row-reverse"
            description="Mettez à disposition de vos patients des documents personnel ainsi que des documents partagés auxquelles chacun d'entre eux aura accès"
            image={DocumentsImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
