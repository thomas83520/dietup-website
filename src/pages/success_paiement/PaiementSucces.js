import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
export default function PaiementSucces({ user }) {
    const history = useHistory();
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={3}>
        <Typography variant="h3">Merci pour votre achat</Typography>
        <Typography py={2}>
          Vous recevrez prochainement sur votre mail ( {user.email} ) votre reçu
          ainsi qu'un document de prise en main de DietUp!
        </Typography>
        <Box fullWidth display="flex" justifyContent="space-evenly">
            
          <Button onClick={()=>history.push("/")}>Retour à l'accueil</Button>
          <Button href="https://app.dietup.fr/" target="_blank">Aller sur l'espace pro</Button>
        </Box>
      </Box>
    </Container>
  );
}
