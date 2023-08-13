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

// import crew
import Ayush_Yadav from "../../../assets/team_23-24/Ayush_Yadav.jpg";
import Bhavik from "../../../assets/team_23-24/Male-member.jpeg";
import Aniket_Pandey from "../../../assets/team_23-24/Aniket_Pandey.jpg";
import Arman_Singh_Kshatri from "../../../assets/team_23-24/Male-member.jpeg";
import Harsh_Shrivastava from "../../../assets/team_23-24/Harsh_Shrivastava.jpg";
import Lokesh_Harmani from "../../../assets/team_23-24/Male-member.jpeg";

// import events
import quiz1 from "../../../assets/club_event_pics/technical/quiz1.jpeg";
import quiz2 from "../../../assets/club_event_pics/technical/quiz2.jpeg";
import quiz3 from "../../../assets/club_event_pics/technical/quiz3.jpeg";
import quiz4 from "../../../assets/club_event_pics/technical/quiz4.jpeg";

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
          event1Name="Fun Quiz"
          event1Date="February 12, 2023"
          event1Desc="Fun based quiz competition"
          event2Name="Treasure Hunt"
          event2Date="March 26, 2023"
          event2Desc="Combined event of Inquizitive and Comet"
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
          <Crew props={crew} />
          <Gallery props={gallery} />
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
    img: Ayush_Yadav,
    name: "Ayush Yadav",
    post: "Club Secretary",
  },
  {
    img: Bhavik,
    name: "Bhavik Sachdev",
    post: "Vice Secretary",
  },
  {
    img: Aniket_Pandey,
    name: "Aniket Pandey",
    post: "Core Member",
  },
  {
    img: Arman_Singh_Kshatri,
    name: "Arman Singh Kshatri",
    post: "Core Member",
  },
  {
    img: Harsh_Shrivastava,
    name: "Harsh Shrivastava",
    post: "Core Member",
  },
  {
    img: Lokesh_Harmani,
    name: "Lokesh Hariramani",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Quizadry",
    date: "15 Oct 2022",
    img: [quiz1, quiz2, quiz3, quiz4],
  },
];
