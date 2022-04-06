import { Box, Stack, Typography, Link } from "@mui/material";
import React from "react";

//assets
import LoginImage from "../../assets/Connexion.png";
import AccueilImage from "../../assets/Accueil.png";
import GooglePlayImage from "../../assets/googlePlay.png";
import AppStoreImage from "../../assets/appStore.svg";

export default function Store() {
  return (
    <Box textAlign="center">
      <Typography variant="h4">
        Une application disponible sur tout les téléphones
      </Typography>
      <Box
        p={3}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        height={{xs:"100%",md:"500px"}}
      >
        <Box
        display={{xs:"none",md:"block"}}
          component="img"
          src={LoginImage}
          alt="Login image"
          sx={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        <Box
        display={{xs:"none",md:"block"}}
          component="img"
          src={AccueilImage}
          alt="Accueil image"
          sx={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          height="100%"
          maxWidth="400px"
        >
          <Link
            href="https://apps.apple.com/mg/app/dietup/id1576122128?l=fr"
            target="_blank"
            sx={{ width: "80%" }}
          >
            <Box
              component="img"
              src={AppStoreImage}
              alt="App store badge"
              sx={{ width: "80%" }}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=fr.dietup.mobileapp&hl=fr&gl=US"
            target="_blank"
            sx={{ width: "80%" }}
          >
            <Box
              component="img"
              src={GooglePlayImage}
              alt="Google play badge"
              sx={{ width: "80%" }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
