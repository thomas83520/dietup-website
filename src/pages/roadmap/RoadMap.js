import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ModalRM from "./ModalRM";

import { useCollection } from "../../hooks/useCollections";
import { ThemeProvider } from "@mui/system";

import { titleTheme, subtitleTheme } from "../../constants";
import { responsiveFontSizes } from "@mui/material/styles";
export default function RoadMap() {
  const [open, setOpen] = useState(false);
  const [motif, setMotif] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [type, setType] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const handleOpen = (motif, id, type) => {
    setMotif(motif);
    setSelectedId(id);
    setType(type);
    if (type === "suggestion" && suggestion === "") return;
    setOpen(true);
  };
  const { documents, error } = useCollection("roadmap");
  const handleClose = () => setOpen(false);

  return (
    <Box textAlign="center">
      <ThemeProvider theme={responsiveFontSizes(titleTheme)}>
        <Typography variant="h2" py={2}>
          RoadMap
        </Typography>
      </ThemeProvider>
      <ThemeProvider theme={responsiveFontSizes(subtitleTheme)}>
        <Typography variant="h6">
          Les fonctionnalités à venir sur DietUp!
        </Typography>
      </ThemeProvider>
      <TableContainer sx={{ padding: "20px" }}>
        <Table sx={{ minWidth: "500px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Fonctionnalité</TableCell>
              <TableCell>Plateforme</TableCell>
              {/*<TableCell>Avancement</TableCell>*/}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {documents &&
              documents.map((document) => (
                <TableRow key={document.id}>
                  <TableCell>{document.name}</TableCell>
                  <TableCell>{document.plateforme}</TableCell>
                  {/* <TableCell>{document.avancement}</TableCell>*/}
                  <TableCell>
                    <Box display={{ xs: "none", sm: "block" }}>
                      <Button
                        onClick={() =>
                          handleOpen(document.name, document.id, "information")
                        }
                        variant="contained"
                        size="small"
                      >
                        Être informé de la sortie
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box m={2} py={2} px={10}>
        <TextField
          fullWidth
          id="suggestion"
          label="Suggérer une nouveautée"
          onChange={(e) => setSuggestion(e.target.value)}
          value={suggestion}
        />
        <Button
          onClick={() => handleOpen("Nouvelle suggestion", "", "suggestion")}
          sx={{ marginY: 2 }}
          size="large"
          variant="contained"
        >
          Suggérer
        </Button>
      </Box>

      <ModalRM
        open={open}
        handleClose={handleClose}
        motif={motif}
        selectedId={selectedId}
        type={type}
        id={selectedId}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
      />
    </Box>
  );
}
