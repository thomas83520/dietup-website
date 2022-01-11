import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

//components
import Contact from "./pages/contact/Contact";

let theme = createTheme({
  palette: {
    primary: { main: "#60A561" },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route>
              <Redirect to="/contact" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
