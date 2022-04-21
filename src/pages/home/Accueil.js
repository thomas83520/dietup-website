import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

//assets & icons
import AccueilImage from "../../assets/blogging_bw.png";
import WebImage from "../../assets/1-2.png";
import PhoneImage from "../../assets/3-1.png";
import DeviceItem from "./DeviceItem";

import { mainTitleTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

export default function Accueil({ func }) {
  return (
    <Box textAlign="center">
      <Box display={{ xs: "none", md: "flex" }}>
        <Box textAlign="center" p={4} sx={{ width: "50%" }}>
          <ThemeProvider theme={responsiveFontSizes(mainTitleTheme)}>
            <Typography variant="h4" color="primary" pb={4}>
              Gardez le contact avec vos patients afin de personnaliser au mieux
              leur suivi
            </Typography>
          </ThemeProvider>
          <Typography variant="subtititle1" py={3}>
            Echangez en direct, suivez les repas de vos patient au quotidien et
            partagez des documents avec eux pour leur permettre d'atteindre leur
            objectifs.
          </Typography>

          <DeviceItem
            image={PhoneImage}
            titre="Application mobile - à destination des patients"
            description="Un espace qui permet à vos patient de renseignez tout ce qui touche à leur alimentation tout en consultant les outils que vous mettez à leur disposition pour atteindre leurs objectifs."
          />
          <DeviceItem
            image={WebImage}
            titre="Application web - à destination des diététiciens"
            description="Consultez les données de tout vos patients, grâce au dashboard vous avez accès dès l'ouverture aux nouveautés des 7 derniers jours."
          />
        </Box>
        <Box
          p={8}
          m="auto"
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            component="img"
            alt="Image Accueil"
            src={AccueilImage}
          />
        </Box>
      </Box>
      <Box display={{ xs: "block", md: "none" }}>
        <Typography variant="h4" color="primary">
          Gardez le contact avec vos patients afin de personnaliser au mieux
          leur suivi
        </Typography>
        <Typography variant="subtititle1" py={3}>
          Echangez en direct, suivez les repas de vos patient au quotidien et
          partagez des documents avec eux pour leur permettre d'atteindre leur
          objectifs.
        </Typography>

        <Box
          p={2}
          m="auto"
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            component="img"
            alt="Image Accueil"
            src={AccueilImage}
          />
        </Box>

        <DeviceItem
          image={PhoneImage}
          titre="Application mobile - à destination des patients"
          description="Un espace qui permet à vos patient de renseignez tout ce qui touche à leur alimentation tout en consultant les outils que vous mettez à leur disposition pour atteindre leurs objectifs."
        />
        <DeviceItem
          image={WebImage}
          titre="Application web - à destination des diététiciens"
          description="Consultez les données de tout vos patients, grâce au dashboard vous avez accès dès l'ouverture aux nouveautés des 7 derniers jours."
        />
      </Box>

      <Button variant="contained" size="large" onClick={func}>
        En Savoir plus
      </Button>
    </Box>
  );
}
