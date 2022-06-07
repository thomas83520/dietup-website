import { createTheme } from "@mui/material/styles";

export let titleTheme = createTheme({
  typography: { fontFamily: ["Staatliches", "Roboto"].join(",") },
});

export let mainTitleTheme = createTheme({
  typography: { fontFamily: ["Staatliches", "Roboto"].join(",") },
  palette: {
    primary: { main: "#60A561", contrastText: "#fff" },
  },
});

export let subtitleTheme = createTheme({
  typography: { fontFamily: ["Patrick hand", "Roboto"].join(",") },
});

export let policeTheme = createTheme({
  typography: {
    fontFamily: ["Abhaya Libre", "Roboto"].join(","),
  },
});

export let formuleTheme = createTheme({
  typography: { fontFamily: ["Balsamiq Sans", "Roboto"].join(",") },
});

export let checkboxLabelTheme = createTheme({
  palette: {
    primary: { main: "#696969", contrastText: "#fff" },
  },
})