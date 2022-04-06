import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";

//Hooks
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Inscription() {
  const { plan } = useParams();
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [prenomError, setPrenomError] = useState(false);
  const [nomError, setNomError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const validateEmail = (email) => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };
  const validatePassword = (password) => {
    return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPrenomError(false);
    setNomError(false);
    setPhoneError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (prenom === "") {
      setPrenomError(true);
      setErrorText("Aucun prenom saisie");
    }
    if (nom === "") {
      setNomError(true);
      setErrorText("Aucun nom saisie");
    }
    if (phone.length < 17) {
      setPhoneError(true);
      setErrorText("Votre numéro est incorrect");
      return;
    }
    if (email === "") {
      setEmailError(true);
      setErrorText("Aucun email saisie");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      setErrorText("Email incorrect");
      return;
    }
    if (password === "") {
      setPasswordError(true);
      setErrorText("Aucun mot de passe saisie");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(true);
      setErrorText("Le mot de passe ne correspond pas aux critères");
      return;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      setErrorText("Le mot de passe et la confirmation ne correspondent pas");
      return;
    }
  };
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={3}>
        <Typography variant="h3">Inscription</Typography>
        <Box component="form" py={2} onSubmit={handleSubmit}>
          <Typography variant="subtitle1" color="grey">
            Informations personnel
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            color="primary"
            id="prenom"
            label="Prenom"
            name="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            value={prenom}
            error={prenomError}
            helperText={prenomError ? errorText : ""}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            color="primary"
            id="nom"
            label="Nom"
            name="nom"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
            error={nomError}
            helperText={nomError ? errorText : ""}
          />
          <MuiPhoneNumber
            defaultCountry={"fr"}
            onlyCountries={["fr"]}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            color="primary"
            id="phone"
            label="Numéro de téléphone"
            name="phone"
            onChange={(numero) => setPhone(numero)}
            value={phone}
            error={phoneError}
            helperText={phoneError ? errorText : ""}
          />

          <Typography py={1} variant="subtitle1">
            Informations de connexion
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            color="primary"
            id="email"
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={emailError}
            helperText={emailError ? errorText : ""}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            color="primary"
            id="password"
            label="Mot de passe"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={passwordError}
            helperText={passwordError ? errorText : ""}
          />
          <Box textAlign="start">
            <Typography variant="subtitle2">
              Votre mot de passe doit :
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              - Faire plus de 8 caratcères de long{" "}
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              - Contenir au minimum 1 majuscule et 1 minuscule
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              - Contenir au moins 1 chiffre
            </Typography>
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            color="primary"
            type="password"
            id="confirmPassword"
            label="Confirmer mot de passe"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            error={confirmPasswordError}
            helperText={confirmPasswordError ? errorText : ""}
          />
          <Box py={2}>
            <Button type="submit" variant="contained" size="large">
              Créer mon compte
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
