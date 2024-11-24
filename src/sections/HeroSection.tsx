import React from "react";
import { Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import logo from "../logo.svg";
import SocialIcons from "../components/SocialIcons";

const HeroSection = () => {
  return (
    <Container
      id="home"
      className="flex flex-col justify-center items-start md:items-center h-screen text-left md:text-center"
    >
      <img src={logo} alt="Haptech logo" className="mb-12" />

      <h1 className="hero-heading text-5xl md:text-8xl text-left md:text-center">
        Redefining
        <br />
        Reality
      </h1>

      <h1 className="hero-heading text-gradient mb-12 text-5xl md:text-8xl text-left md:text-center">
        Empowering
        <br />
        Possibility
      </h1>

      <Box>
        <Grid container justifyContent="center" spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <p className="font-mono mb-12">
              At Haptechs, we're pushing the boundaries of what's possible
              with Virtual and Augmented Reality. We are creating immersive
              experiences that blend cutting-edge hardware with intuitive
              software to unlock the full potential of VR and AR.
            </p>

            <SocialIcons />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
