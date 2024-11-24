import React from "react";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import "./index.css";

// Sections
import HeroSection from "./sections/HeroSection";
import VisionSection from "./sections/VisionSection";
import MissionSection from "./sections/MissionSection";
import FutureSection from "./sections/FutureSection";
import WhyVrMattersSection from "./sections/WhyVrMattersSection";
import HapsphereSection from "./sections/HapSphereSection";

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
    mode: "dark",
    background: {
      default: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <header className="App-header">
        <NavBar />
        <HeroSection />
      </header>

      <VisionSection/>

      <MissionSection/>

      <FutureSection/>

      <WhyVrMattersSection/>

      <HapsphereSection/>

    </ThemeProvider>
  );
}

export default App;
