import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import logo from "../logo.svg";
import SocialIcons from "../components/SocialIcons";
import ContactForm from "../components/ContactForm";
import Notification from "../components/Notification";

const ContactFormSection = () => {
  return (
    <Container id="home" className="flex flex-col justify-center items-start h-screen text-left snap-start contact-section">
      <img src={logo} alt="Haptech logo" className="mb-12" />
      <h2 className="text-1xl font-sans mb-4">Contact Us</h2>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Notification />
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactFormSection;
