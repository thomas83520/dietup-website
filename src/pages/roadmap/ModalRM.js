import React, { useState } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { timestamp, projectFirestore } from "../../firebase/config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalRM({
  open,
  handleClose,
  motif,
  type,
  id,
  suggestion,
  setSuggestion,
}) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const validateEmail = (email) => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError(true);
      setErrorText("Email est vide");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      setErrorText("Ceci n'est pas un email");
      return;
    }
    const doc = {
      email,
      dateAbonnement: timestamp.fromDate(new Date()),
    };

    const docSuggestion = {
      email,
      dateSuggestion: timestamp.fromDate(new Date()),
      suggestion,
    };
    try {
      if (type === "information")
        await projectFirestore
          .collection("roadmap")
          .doc(id)
          .collection("subscription")
          .add(doc);
      if (type === "suggestion")
        await projectFirestore.collection("suggestion").add(docSuggestion);
    } catch (e) {
    }
    setSuggestion('')
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        textAlign="center"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography id="modal-modal-title" variant="h5" component="h2">
          {motif}
        </Typography>
        <Typography sx={{ marginY: "5px" }}>
          {type === "suggestion" && suggestion}
        </Typography>
        <Typography variant="subtitle2">
          {type === "suggestion"
            ? "Pour être contacté en cas de validation de votre suggestion"
            : "Vous serez informé par mail de l'avancement de cette fonctionnalité"}
        </Typography>
        <TextField
          sx={{ marginY: "15px" }}
          fullWidth
          id="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={emailError}
          helperText={emailError ? errorText : ""}
        />
        <Button type="submit">Être informé</Button>
      </Box>
    </Modal>
  );
}
