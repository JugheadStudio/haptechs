import React from "react";
import { Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

const FutureSection = () => {
  return (
    <Container
      id="future"
      className="flex flex-col justify-start md:justify-center Section-top-spacing h-screen text-left vr-bg-1"
    >
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <h2 className="section-heading text-3xl md:text-6xl text-left text-pink mb-10">
              The Future <br />
              is Virtual
            </h2>
            <p className="font-mono text-white">
              Virtual Reality (VR) and Augmented Reality (AR) are reshaping
              industries—from gaming and entertainment to education, healthcare,
              and beyond. With VR, users dive into entirely new worlds, while AR
              overlays digital information seamlessly onto the real world.
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FutureSection;
