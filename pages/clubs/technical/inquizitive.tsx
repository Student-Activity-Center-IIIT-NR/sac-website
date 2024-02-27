import React from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import inquizitiveBg from "../../../assets/technical_clubs_bg/inquizitive.png";
import inquizitiveBgTop from "../../../assets/technical_clubs_bg/bg_inquizitive_top.svg";
import inquizitiveBgBottom from "../../../assets/technical_clubs_bg/bg_inquizitive_bottom.svg";
import inquizitiveLogo from "../../../assets/technical_clubs_bg/inquizitive_logo.jpg";
import { inquizitive } from "../../../data/Crews/TechnicalClubCrew";

const Inquizitive = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="Inquizitive"
          desc="The Quiz club"
          bgTop={inquizitiveBgTop}
          logo={inquizitiveLogo}
          color="#BB9AF7"
        />
        <ClubDescription bg={inquizitiveBg}>
          True to its name, Inquisitive is the abode of the most curious minds
          of IIIT NR. Inquisitive brings current affairs, and general knowledge
          to you in a fun way. Thus, contributing to an increase in the IQ of
          the campus. Inquisitive is a group of individuals who are passionate
          about knowledge and enjoy competing with their peers. They regularly
          participate in quizzes and competitions on various topics, from
          general knowledge and trivia to specific subject areas such as
          history, science, literature, and more. The club provides a fun and
          engaging environment for individuals to learn and challenge themselves
          while building camaraderie and friendly competition with others.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${inquizitiveBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          <Crew props={inquizitive} />
          <Gallery club="Inquizitive" />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default Inquizitive;
