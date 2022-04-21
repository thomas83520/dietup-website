import React from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//Hooks
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import { useFunctions } from "../../hooks/useFunctions";

export default function InscriptionForm({
  docPlan,
  setReadyForPaiement,
  setClientSecret,
}) {
  const { signup, isPending, error } = useSignup();
  const { callfunction, response } = useFunctions();
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = async (e) => {
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

    let displayName = nom + " " + prenom;

    const {valide,reponse} = await signup(email, password, displayName);

    if(!valide){
      console.log(reponse.message);
      if(reponse.code === "auth/email-already-in-use"){

      setEmailError(true);
      setErrorText("Cet email est déjà utilisé.");
      }
      return;
    }
    const user = reponse;
    console.log("user",user);
    const codeDiet = await callfunction("generateCodeDiet", {});
    const data = {
      email,
      nom,
      prenom,
      phone,
      uid: user.uid,
      uidDiet: codeDiet,
      priceId: docPlan.priceId,
      asEngagement: docPlan.asEngagement,
      engagementDuree: docPlan.engagementDuree,
    };
    const result = await callfunction("createStripeCustomers", data);
    console.log("result", result);
    setClientSecret(result.clientSecret);
    setReadyForPaiement(true);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNom("");
    setPrenom("");
    setPhone("");
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
            type={showPassword ? "text" : "password"}
            color="primary"
            id="password"
            label="Mot de passe"
            name="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            label="Confirmer mot de passe"
            name="confirmPassword"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            error={confirmPasswordError}
            helperText={confirmPasswordError ? errorText : ""}
          />
          <Box py={2}>
            {response.isPending || isPending ? (
              <Button disabled variant="contained" size="large">
                Création en cours
              </Button>
            ) : (
              <Button type="submit" variant="contained" size="large">
                Créer mon compte
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
