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
import { StaticImageData } from "next/image";
import Shivam_Kushwaha from "../../../assets/team_22-23/Shivam_Kushwaha.jpeg";
import AnirudhSinghBhakar from "../../../assets/team_22-23/AnirudhSinghBhakar.jpeg";
import Rigved_Atul_Desai from "../../../assets/team_22-23/Rigved_Atul_Desai.jpeg";
import Ghanta_Sai_Krishna from "../../../assets/team_22-23/Ghanta_Sai_Krishna.jpeg";
import A_Bhumika_Rao from "../../../assets/team_22-23/A_Bhumika_Rao.jpeg";


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
          event1Name="Kaggle Competition"
          event1Date="18 Feb 2023"
          event1Desc="Competition on Kaggle"
          event2Name="Hackathon/Quiz"
          event2Date="25 March 2023"
          event2Desc="AIML Hackathon"
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
             <Crew  props={crew}/>
          <Gallery props={gallery}/> 
        </Box>
      </ClubsLayout>
    </>
  );
};

export default Inquizitive;


interface CrewProps {
  img: StaticImageData;
  name: string;
  post: string;
}

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const crew: CrewProps[] = [
  {
    img: Shivam_Kushwaha,
    name: "Shivam Kushwaha",
    post: "Club Secretary",
  },
  {
      img: Rigved_Atul_Desai,
      name: "Rigved",
      post: "Vice Secretary",
    },
    {
      img: AnirudhSinghBhakar,
      name: "Anirudh",
      post: "Core Member",
    }
];

const gallery: GalleryProps[] = [
  {
    name: "SCIη′TFIC",
    date: "14 January 2023",
    img: [
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
      A_Bhumika_Rao,
    ],
  },
  {
    name: "Test",
    date: "14 January 2023",
    img: [
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
      Ghanta_Sai_Krishna,
    ],
  },
];