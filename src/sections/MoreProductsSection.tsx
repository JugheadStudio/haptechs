import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const MoreProductsSection = () => {
  const content = [
    {
      icon: "/assets/VR-product.png",
      heading: "AR ProLens",
      content: "The AR ProLens brings augmented reality into your workspace, letting you interact with 3D objects in real-time. Ideal for architects, designers, and engineers.",
    },
    {
      icon: "/assets/VR-product.png",
      heading: "VirtuPad",
      content: "The VirtuPad is an omnidirectional treadmill designed for VR gaming and fitness enthusiasts. Run, walk, or sprint in any direction while staying safe in your living room.",
    },
    {
      icon: "/assets/VR-product.png",
      heading: "SenseGlove X",
      content: "The SenseGlove X is our premium haptic glove, perfect for simulating realistic hand movements in VR training and simulations.",
    },
  ];

  return (
    <Container id="more-products" className="flex flex-col justify-between Section-top-spacing items-start pb-12 snap-start">
      <div className="flex w-full">
        <h2 className="section-heading text-2xl md:text-5xl">Why VR Matters</h2>

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
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Box
              className="flex flex-col justify-start p-6"
              sx={{
                border: "1px solid #F62974",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(8px)",
                textAlign: "center",
                height: "100%",
              }}
            >
              <img src={item.icon} alt={item.heading} className="mb-4" />

              <h3 className="text-lg font-bold text-white mb-4 text-gradient card-heading">{item.heading}</h3>

              <p className="font-mono text-white">{item.content}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoreProductsSection;
