import React from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import aimlBg from "../../../assets/technical_clubs_bg/aiml.jpeg";
import aimlBgTop from "../../../assets/technical_clubs_bg/bg_aiml_top.svg";
import aimlBgBottom from "../../../assets/technical_clubs_bg/bg_aiml_bottom.svg";
import aimlLogo from "../../../assets/technical_clubs_bg/aiml_logo.svg";
import { aiml } from "../../../data/Crews/TechnicalClubCrew";

const Aiml = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="AIML"
          desc="Artificial Intelligence and Machine Learning"
          bgTop={aimlBgTop}
          logo={aimlLogo}
          color="#73DACA"
          instagram="https://www.instagram.com/aiml_iiitnr/"
        />
        <ClubDescription bg={aimlBg}>
          The AI/ML club is focused on helping individuals evolve from admirers
          of Artificial Intelligence and Machine Learning technology to capable
          developers. The club provides an opportunity to learn and build
          projects from the ground up using open-source tools such as TensorFlow
          and Keras, with a focus on application development using Python.
          Additionally, members will have the opportunity to participate in
          competitions, hackathons, and even contribute to the open-source
          technology they work with. As we live in the internet age and now
          moving towards the age of AI, this club is an ideal place to learn,
          explore and develop AI-based projects.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${aimlBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          <Crew props={aiml} />
          <Gallery club="AIML" />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default Aiml;
