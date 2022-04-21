import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//import "./index.css";
//font
import "@fontsource/roboto";
import { CssBaseline } from "@mui/material";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

const stripe_id = process.env.REACT_APP_STRIPE_API_KEY;

const stripePromise = loadStripe(stripe_id);
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Elements stripe={stripePromise}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
