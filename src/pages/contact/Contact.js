//Components
import {
  Container,
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

//Hooks
import { useState } from "react";
import { useFunctions } from "../../hooks/useFunctions";

//assets & icons
import Logo from "../../assets/logo_7.svg";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [contenu, setContenu] = useState("");
  const [typeApp, setTypeApp] = useState("Android");

  const [emailError, setEmailError] = useState(false);
  const [sujetError, setSujetError] = useState(false);
  const [contenuError, setContenuError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const {sendMail,response} = useFunctions()

  const validateEmail = (email) => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContenuError(false);
    setEmailError(false);
    setSujetError(false);
    setErrorText("");

    if (email === "") {
      setEmailError(true);
      setErrorText("Email est vide");
      return;
    }
    console.log(validateEmail(email))
    if (!validateEmail(email)) {
      setEmailError(true);
      setErrorText("Ceci n'est pas un email");
      return;
    }
    if (sujet === "") {
      setSujetError(true);
      setErrorText("Sujet est vide");
      return;
    }
    if (contenu === "") {
      setContenuError(true);
      setErrorText("Contenu est vide");
      return;
    }

    const data = {subject:"Contact for "+typeApp,text : contenu +" from "+ email}
    console.log(data);
    await sendMail('sendMailContact',data);

    setEmail('');
    setSujet('');
    setContenu('');
    setTypeApp('Android');
  };
  return (
    <div>
      <Container component="main" maxWidth="sm">
        <Box
          display="block"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          textAlign="center"
          marginTop="20px"
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={Logo}
          />
          <Typography variant="h4" component="h1" color="primary">
            Formulaire de contact :{" "}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              color="primary"
              id="email"
              label="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              error={emailError}
              helperText={emailError ? errorText : ""}
            />
            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="select-type-app-label">
                Application concernée
              </InputLabel>
              <Select
                labelId="select-type-app-label"
                id="select-type-app"
                label="Application concernée"
                color="primary"
                onChange={(e) => setTypeApp(e.target.value)}
                value={typeApp}
                required
              >
                <MenuItem value={"Android"}>Appli mobile Android</MenuItem>
                <MenuItem value={"iOS"}>Appli mobile iOS</MenuItem>
                <MenuItem value={"Webapp"}>
                  Application web diététicien
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              color="primary"
              id="sujet"
              label="Sujet"
              name="sujet"
              onChange={(e) => setSujet(e.target.value)}
              value={sujet}
              error={sujetError}
              helperText={sujetError ? errorText : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              color="primary"
              multiline
              rows="5"
              id="contenu"
              label="Contenu"
              name="contenu"
              onChange={(e) => setContenu(e.target.value)}
              value={contenu}
              error={contenuError}
              helperText={contenuError ? errorText : ""}
            />
            {response.isPending ? <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled
              endIcon={<SendIcon />}
            >
              Loading..
            </Button> : <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Envoyer
            </Button>}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
