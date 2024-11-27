import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import logo from "../logo.svg";
import SocialIcons from "../components/SocialIcons";
import ContactForm from "../components/ContactForm";
import Notification from "../components/Notification";

const ContactFormSection = () => {
  return (
    <Container id="home" className="flex flex-col justify-center items-start md:items-center h-screen text-left md:text-center snap-start">
      <img src={logo} alt="Haptech logo" className="mb-12" />

      <Box>
        <Grid container justifyContent="center" spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <Notification />
            <ContactForm/>
            <SocialIcons justifyCenter={true} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactFormSection;
