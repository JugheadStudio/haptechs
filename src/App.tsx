import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    // fontFamily: 'Roboto Mono, monospace',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <NavBar />
          <HeroSection />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
