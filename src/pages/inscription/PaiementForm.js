import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

import React, { useEffect, useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Redirect } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function PaiementForm({
  ReadyForPaiement,
  setReadyForPaiement,
  clientSecret,
  setClientSecret,
  docPlan,
  user,
}) {
  const { logout, error, isPending } = useLogout();
  console.log("user", user);
  // Initialize an instance of stripe.
  const stripe = useStripe();
  const elements = useElements();

  const [paymentIntent, setPaymentIntent] = useState();
  const [errorPayement, setErrorPayement] = useState();

  const [loadingPaiement, setLoadingPaiement] = useState(false);

  const [messages, _setMessages] = useState("");
  const [fullName, setFullName] = useState(user.displayName);

  // helper for displaying status messages.
  const setMessage = (message) => {
    _setMessages(`${messages}\n\n${message}`);
  };

  useEffect(async () => {
    console.log("user", user);
    const doc = await projectFirestore
      .collection("paiementIntent")
      .doc(user.uid)
      .get();
    console.log("doc", doc.data());
    if (doc.exists) {
      setClientSecret(doc.data().clientSecret);
      setReadyForPaiement(true);
    }
  }, []);

  const handleSubmit = async () => {
    const cardElement = elements.getElement(CardElement);
    setLoadingPaiement(true);
    let { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: fullName,
          },
        },
      }
    );
    setLoadingPaiement(false);
    if (error) {
      // show error and collect new card details.
      setMessage(error.message);
      setErrorPayement(true);
      return;
    }
    setPaymentIntent(paymentIntent);
  };
  if (paymentIntent && paymentIntent.status === "succeeded") {
    return <Redirect to={{ pathname: "/paiement_succeeded" }} />;
  }

  return ReadyForPaiement && docPlan ? (
    <Container maxWidth="sm" sx={{ marginY: 5 }}>
      <Box p={5} sx={{ border: 0, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" mb={2} textAlign="center">
          {docPlan.nom}
        </Typography>
        <Typography>{docPlan.prixDisplayPaiement}</Typography>
        <Typography variant="subtitle2" mb={2}>
          {docPlan.engagementDisplay}
        </Typography>
        <TextField
          fullWidth
          sx={{ marginY: 2 }}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          size="small"
        />
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        {loadingPaiement ? (
          <Button
            sx={{ marginY: 3 }}
            disabled
            fullWidth
            variant="contained"
          >
            Paiement en cours
          </Button>
        ) : (
          <Button
            sx={{ marginY: 3 }}
            fullWidth
            variant="contained"
            onClick={handleSubmit}
          >
            Commencer mon abonnement
          </Button>
        )}
        {errorPayement && (
          <Typography textAlign="center" color="error">
            Une erreur est survenue lors du paiement, vous n'avez pas été
            prélevé.
          </Typography>
        )}
      </Box>
    </Container>
  ) : (
    <Box fullWidth textAlign="center" my={2}>
      <CircularProgress />
      <Typography>Chargement du formulaire de paiement</Typography>
    </Box>
  );
}
