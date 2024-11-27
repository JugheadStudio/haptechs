import React, { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import ContactFormSection from "./sections/ContactFormSection";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex((section) => section === entry.target);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (index: number, isHapsphere: boolean = false, nestedIndex: number = 0) => {
    if (isHapsphere) {
      if (hapsphereSectionsRef.current[nestedIndex]) {
        hapsphereSectionsRef.current[nestedIndex]?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (sectionsRef.current[index]) {
        sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScrollUp = () => {
    if (currentSection === 5 && currentNestedSection > 0) {
      setCurrentNestedSection((prev) => {
        const newSection = prev - 1;
        if (newSection >= 0) {
          scrollToSection(currentSection, true, newSection);
          return newSection;
        }
        return prev;
      });
    } else if (currentSection === 6) {
      setCurrentSection(5);
      setCurrentNestedSection(hapsphereSectionsRef.current.length - 1);
      scrollToSection(5, true, hapsphereSectionsRef.current.length - 1);
    } else if (currentSection > 0) {
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
      setCurrentNestedSection((prev) => {
        const newSection = prev + 1;
        if (newSection < hapsphereSectionsRef.current.length) {
          scrollToSection(currentSection, true, newSection);
          return newSection;
        }
        return prev;
      });
    } else if (currentSection === 5) {
      setCurrentSection(6);
      setCurrentNestedSection(0);
      scrollToSection(6);
    } else if (currentSection < sectionsRef.current.length - 1) {
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

      <div className=" h-screen overflow-y-scroll snap-none sm:snap-y sm:snap-mandatory">
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

        <div ref={(el) => (sectionsRef.current[8] = el)}>
          <ContactFormSection />
        </div>
      </div>

      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <button onClick={handleScrollUp} className="bg-pink text-white p-2 rounded-full shadow-lg hover:bg-red transition-all hidden sm:flex">
          <ExpandLessIcon className="text-white !text-4xl" />
        </button>
        <button onClick={handleScrollDown} className="bg-pink text-white p-2 rounded-full shadow-lg hover:bg-red transition-all hidden sm:flex">
          <ExpandMoreIcon className="text-white !text-4xl" />
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
