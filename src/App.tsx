import React, { useState, useRef } from "react";
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
import MoreProductsSection from "./sections/MoreProductsSection";
import FooterSection from "./sections/FooterSection";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
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
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hapsphereSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [currentSection, setCurrentSection] = useState(0);
  const [currentNestedSection, setCurrentNestedSection] = useState(0);

  const scrollToSection = (index: number, isHapsphere: boolean = false, nestedIndex: number = 0) => {
    if (isHapsphere) {
      // Scroll to the nested section inside Hapsphere
      if (hapsphereSectionsRef.current[nestedIndex]) {
        hapsphereSectionsRef.current[nestedIndex]?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to the main section
      if (sectionsRef.current[index]) {
        sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScrollUp = () => {
    if (currentSection === 5 && currentNestedSection > 0) {
      // If we're in Hapsphere and not at the first nested section, scroll up within the nested sections
      setCurrentNestedSection((prev) => {
        const newSection = prev - 1;
        if (newSection >= 0) {
          scrollToSection(currentSection, true, newSection); // Scroll to the previous nested section
          return newSection;
        }
        return prev;
      });
    } else if (currentSection === 6) {
      // If we're at the MoreProductsSection, scroll to the last nested section of Hapsphere
      setCurrentSection(5); // Go back to HapsphereSection
      setCurrentNestedSection(hapsphereSectionsRef.current.length - 1); // Go to the last nested section
      scrollToSection(5, true, hapsphereSectionsRef.current.length - 1); // Scroll to the last nested section
    } else if (currentSection > 0) {
      // If we're not in Hapsphere, scroll to the previous main section
      setCurrentSection((prevSection) => {
        const newSection = prevSection - 1;
        if (newSection >= 0) {
          scrollToSection(newSection);
          return newSection;
        }
        return prevSection;
      });
    }
  };
  
  const handleScrollDown = () => {
    if (currentSection === 5 && currentNestedSection < hapsphereSectionsRef.current.length - 1) {
      // If we're in Hapsphere and not at the last nested section, scroll down within the nested sections
      setCurrentNestedSection((prev) => {
        const newSection = prev + 1;
        if (newSection < hapsphereSectionsRef.current.length) {
          scrollToSection(currentSection, true, newSection); // Scroll to the next nested section
          return newSection;
        }
        return prev;
      });
    } else if (currentSection === 5) {
      // If we're in the last nested section, scroll to the next main section
      setCurrentSection(6); // Go to MoreProductsSection
      setCurrentNestedSection(0); // Reset nested section to the first one
      scrollToSection(6); // Scroll to MoreProductsSection
    } else if (currentSection < sectionsRef.current.length - 1) {
      // If we're not in Hapsphere, scroll to the next main section
      setCurrentSection((prevSection) => {
        const newSection = prevSection + 1;
        if (newSection < sectionsRef.current.length) {
          scrollToSection(newSection);
          return newSection;
        }
        return prevSection;
      });
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar />

      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Main Sections */}
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <HeroSection />
        </div>

        <div ref={(el) => (sectionsRef.current[1] = el)}>
          <VisionSection />
        </div>

        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <MissionSection />
        </div>

        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <FutureSection />
        </div>

        <div ref={(el) => (sectionsRef.current[4] = el)}>
          <WhyVrMattersSection />
        </div>

        <div ref={(el) => (sectionsRef.current[5] = el)}>
          <HapsphereSection nestedSectionsRef={hapsphereSectionsRef} />
        </div>

        <div ref={(el) => (sectionsRef.current[6] = el)}>
          <MoreProductsSection />
        </div>

        <div ref={(el) => (sectionsRef.current[7] = el)}>
          <FooterSection />
        </div>
      </div>

      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <button
          onClick={handleScrollUp}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          ↑
        </button>
        <button
          onClick={handleScrollDown}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          ↓
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
