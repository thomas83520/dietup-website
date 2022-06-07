import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InscriptionForm from "./InscriptionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import PaiementForm from "./PaiementForm";
import { projectFirestore } from "../../firebase/config";
import { Redirect } from "react-router-dom";

export default function Inscription() {
  const { plan } = useParams();
  const { user, authIsReady } = useAuthContext();
  const { logout, error, isPending } = useLogout();
  const [readyForPaiement, setReadyForPaiement] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [newPrice, setNewPrice] = useState(null);
  const [docPlan, setDocPlan] = useState();
  const [noPlan, setNoPlan] = useState(false);

  const [paiementComplete, setPaiementComplete] = useState(false);

  useEffect(async () => {
    try {
      const snapshot = await projectFirestore
        .collection("abonnement")
        .where("link", "==", plan)
        .limit(1)
        .get();
      if (snapshot.empty) {
        setNoPlan(true);
        return;
      }
      snapshot.forEach((doc) => {
        setDocPlan(doc.data());
      });
    } catch (e) {
      console.log("err");
    }
  }, [plan]);

  if (paiementComplete) {
    return <Redirect to={{ pathname: "/paiement_succeeded" }} />;
  }
  return noPlan ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    authIsReady &&
      (!user ? (
        docPlan ? (
          <InscriptionForm
            docPlan={docPlan}
            setReadyForPaiement={setReadyForPaiement}
            setClientSecret={setClientSecret}
            setPaiementComplete={setPaiementComplete}
            setNewPrice={setNewPrice}
          />
        ) : (
          <Box textAlign="center">
            <CircularProgress />
            <Typography>Chargement du formulaire d'inscription</Typography>
          </Box>
        )
      ) : (
        <PaiementForm
          ReadyForPaiement={readyForPaiement}
          setReadyForPaiement={setReadyForPaiement}
          docPlan={docPlan}
          clientSecret={clientSecret}
          setClientSecret={setClientSecret}
          user={user}
          newPrice={newPrice}
        />
      ))
  );
}
