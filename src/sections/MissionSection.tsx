import React from "react";
import { Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

const MissionSection = () => {
  return (
    <Container
      id="mission"
      className="flex flex-col justify-between Section-top-spacing items-start h-screen text-left"
    >
      <div className="flex items-center w-full">
        <h2 className="section-heading text-2xl md:text-5xl text-left">
          Mission
        </h2>
				 
        <Box
          sx={{
            flexGrow: 1,
            height: "5px",
            backgroundColor: "#F62974",
            marginLeft: 2,
          }}
        />
      </div>

      <Box>
        <Grid container spacing={2}>
          <Grid size={12}>
            <p className="section-text-large font-sans mb-12 text-grey text-3xl md:text-6xl">
              To craft <span className="text-gradient">innovative</span> technologies that <span className="text-white">redefine</span> how people <span className="text-white">work, play,</span> and <span className="text-white">connect</span> in virtual spaces.
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MissionSection;
