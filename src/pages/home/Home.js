import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import Store from "./Store";
import Accueil from "./Accueil";
import Fonctionnalite from "./Fonctionnalite";
import More from "./More";

export default function Home() {
  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();
  return (
    <Box width="100%" height="100%" p={{xs:2,md:0}}>
      <Accueil func={scrollToElement} />
      <Fonctionnalite reference={testRef} />
      <Store />
      <More/>
    </Box>
  );
}
