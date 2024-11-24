import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import logo from "../logo.svg";
import SocialIcons from "../components/SocialIcons";

const FooterSection = () => {
  return (
    <Container id="home" className="flex flex-col justify-center items-start h-screen text-left md:text-center vr-bg-3 snap-start">
      <img src={logo} alt="Haptech logo" className="mb-12" />

      <h1 className="hero-heading text-3xl md:text-5xl text-left mb-10">
        Join Us in
        the Virtual <br />
        Revolution
      </h1>

      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            <p className="font-mono mb-5 text-left">Stay updated on the latest innovations, product launches, and exclusive deals.</p>
            <p className="font-mono mb-20 text-left">Subscribe to our newsletter and be the first to experience the future of VR.</p>

            <p className="text-1xl md:text-1xl text-left font-bold hapsphere-sub-heading mb-5">
							Follow Us 
            </p>

            <SocialIcons justifyCenter={false}/>

            <p className="text-pink mt-5 text-left">
							#Haptechs #NextLevelVR
            </p>

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FooterSection;
