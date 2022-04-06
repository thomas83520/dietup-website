import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createTheme, ThemeProvider, responsiveFontSizes,Box } from "@mui/material";

//components
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import MenuBar from "./pages/components/MenuBar";
import Footer from "./pages/components/Footer";
import Tarifs from "./pages/tarifs/Tarifs";
import RoadMap from "./pages/roadmap/RoadMap";
import Inscription from "./pages/inscription/Inscription";

let theme = createTheme({
  palette: {
    primary: { main: "#60A561",contrastText: "#fff" },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <MenuBar/>
          <Switch>     
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/tarifs">
              <Tarifs/>
            </Route>
            <Route path="/roadmap">
              <RoadMap/>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/inscription/:plan">
              <Inscription/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
      </Box>
    </div>
  );
}

export default App;
