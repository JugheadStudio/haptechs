import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WhyVrMattersSection = () => {
  const content = [
    {
      icon: "/assets/VR.svg",
      heading: "Immersive Experiences",
      content: "Create astonishingly real environments that engage the senses and blur the line between digital and physical worlds.",
    },
    {
      icon: "/assets/Applications.svg",
      heading: "Revolutionary Applications",
      content: "Revolutionise industries like training, education, healthcare, and entertainment by offering practical, interactive solutions.",
    },
    {
      icon: "/assets/Ship.svg",
      heading: "The Next Frontier",
      content: "Unlock new possibilities for storytelling, fostering collaboration, and connecting people across the globe in profound, shared experiences.",
    },
  ];

  return (
    <Container id="why-vr-matters" className="flex flex-col justify-between Section-top-spacing items-start vr-bg-2 pb-12 snap-start">
      <div className="flex w-full">
        <h2 className="section-heading text-2xl md:text-5xl mb-20">Why VR Matters</h2>

        <Box
          sx={{
            flexGrow: 1,
            height: "5px",
            backgroundColor: "#F62974",
            marginLeft: 2,
          }}
        />
      </div>

      <Grid container spacing={2} className="mt-8">
        {content.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <Box
              className="flex flex-col p-6"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid #F62974",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(8px)",
                textAlign: "center",
                height: "100%",
              }}
            >
              <img src={item.icon} alt={item.heading} className="mb-6" style={{ height: 60 }} />

              <h3 className="text-lg font-bold text-white mb-6 text-gradient card-heading">{item.heading}</h3>

              <p className="font-mono text-white">{item.content}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyVrMattersSection;
