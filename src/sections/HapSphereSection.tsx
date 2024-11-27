import React from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ThreeDModel from "../components/ThreeDModel";

interface HapsphereSectionProps {
  nestedSectionsRef: React.RefObject<(HTMLDivElement | null)[]>; // Prop to accept nested refs
}

const HapsphereSection: React.FC<HapsphereSectionProps> = ({ nestedSectionsRef }) => {
  return (
    <>
      <Container
        id="hapsphere"
        ref={(el) => {
          if (nestedSectionsRef.current) nestedSectionsRef.current[0] = el;
        }}
        className="flex flex-col justify-start Section-top-spacing h-screen text-left snap-start"
      >
        <Box>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <h2 className="section-heading text-3xl md:text-6xl text-left text-white mb-10">
                introducing <br />
                HapSphere
              </h2>

              <h3 className="text-1xl md:text-1xl text-left text-pink mb-10 hapsphere-sub-heading">
                Enter the Next Dimension <br />
                of Immersion
              </h3>

              <p className="font-mono text-white mb-5">The HapSphere™ is a next-generation VR headset that combines precision-engineered hardware with groundbreaking haptic feedback technology. Feel the virtual world like never before—every texture, movement, and sensation brought to life.</p>
            </Grid>

            <Grid size={{ xs: 12, md: 12, lg: 6 }} className="image-border-container w-full h-auto">
              <img src="/assets/headset4.png" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container
        id="hapsphere2"
        ref={(el) => {
          if (nestedSectionsRef.current) nestedSectionsRef.current[1] = el;
        }}
        className="flex flex-col justify-start Section-top-spacing h-screen text-left snap-start"
      >
        <Box>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <h2 className="section-heading text-3xl md:text-6xl text-left text-white mb-10">
                4K Resolution <br />
                Lenses
              </h2>

              <h3 className="text-1xl md:text-1xl text-left text-pink mb-10 hapsphere-sub-heading">Crystal-clear visuals with 120° FOV.</h3>

              <p className="font-mono text-white mb-5">Immerse yourself in vivid, lifelike visuals powered by ultra-high-definition 4K lenses.</p>

              <p className="font-mono text-white mb-5">With a 120° field of view (FOV), enjoy expansive panoramas and precise details, giving you a sharper, more realistic perspective.</p>
            </Grid>

						<Grid size={{ xs: 12, md: 12, lg: 6 }} className="image-border-container w-full h-auto">
              <img src="/assets/headset5.png" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container
        id="hapsphere3"
        ref={(el) => {
          if (nestedSectionsRef.current) nestedSectionsRef.current[2] = el;
        }}
        className="flex flex-col justify-start Section-top-spacing h-screen text-left snap-start"
      >
        <Box>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <h2 className="section-heading text-3xl md:text-6xl text-left text-white mb-10">
                Dynamic <br />
                Haptics
              </h2>

              <h3 className="text-1xl md:text-1xl text-left text-pink mb-10 hapsphere-sub-heading">
                Real-time sensory feedback <br />
                across your hands and body.
              </h3>

              <p className="font-mono text-white mb-5">Experience touch like never before with cutting-edge haptic feedback technology.</p>

              <p className="font-mono text-white mb-5">Feel textures, movements, and impacts in real-time, from the grain of a wooden surface to the rumble of distant explosions.</p>

              <p className="font-mono text-white mb-5">Integrated haptic sensors across your hands and body make the virtual world tangible.</p>
            </Grid>

						<Grid size={{ xs: 12, md: 12, lg: 6 }} className="image-border-container w-full h-auto">
              <img src="/assets/headset3.png" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container
        id="hapsphere4"
        ref={(el) => {
          if (nestedSectionsRef.current) nestedSectionsRef.current[3] = el;
        }}
        className="flex flex-col justify-start Section-top-spacing h-screen text-left snap-start"
      >
        <Box>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <h2 className="section-heading text-3xl md:text-6xl text-left text-white mb-10">Eye-Tracking</h2>

              <h3 className="text-1xl md:text-1xl text-left text-pink mb-10 hapsphere-sub-heading">
                Enhanced interactivity <br />
                and intuitive navigation.
              </h3>

              <p className="font-mono text-white mb-5">Navigate your virtual environment seamlessly with advanced eye-tracking sensors.</p>

              <p className="font-mono text-white mb-5">Enjoy intuitive interactions and enhanced performance, with dynamic rendering that prioritises visuals based on where you look, ensuring crystal-clear focus.</p>
            </Grid>

						<Grid size={{ xs: 12, md: 12, lg: 6 }} className="image-border-container w-full h-auto">
              <img src="/assets/headset6.png" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container
        id="hapsphere5"
        ref={(el) => {
          if (nestedSectionsRef.current) nestedSectionsRef.current[4] = el;
        }}
        className="flex flex-col justify-start Section-top-spacing h-screen text-left snap-start"
      >
        <Box>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <h2 className="section-heading text-3xl md:text-6xl text-left text-white mb-10">
                Lightweight <br />
                Design
              </h2>

              <h3 className="text-1xl md:text-1xl text-left text-pink mb-10 hapsphere-sub-heading">Comfort for extended use.</h3>

              <p className="font-mono text-white mb-5">Designed with your comfort in mind, the HapSphere™ features an ultra-lightweight frame.</p>

              <p className="font-mono text-white mb-5">Its ergonomic build ensures balanced weight distribution and soft, breathable padding, allowing you to lose yourself in the experience for hours without strain.</p>
            </Grid>

						<Grid size={{ xs: 12, md: 12, lg: 6 }} className="image-border-container w-full h-auto">
              <img src="/assets/headset2.png" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HapsphereSection;
