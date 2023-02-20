import React from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import { StaticImageData } from "next/image";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import aimlBg from "../../../assets/technical_clubs_bg/aiml.jpeg";
import aimlBgTop from "../../../assets/technical_clubs_bg/bg_aiml_top.svg";
import aimlBgBottom from "../../../assets/technical_clubs_bg/bg_aiml_bottom.svg";
import aimlLogo from "../../../assets/technical_clubs_bg/aiml_logo.svg";

// import team members
import Ghanta_Sai_Krishna from "../../../assets/team_22-23/Ghanta_Sai_Krishna.jpeg";
import Sainath from "../../../assets/team_22-23/Sainath.jpeg";
import A_Bhumika_Rao from "../../../assets/team_22-23/A_Bhumika_Rao.jpeg";
import Shivaibhav from "../../../assets/team_22-23/Shivaibhav.jpeg";
import saiprabhat from "../../../assets/team_22-23/saiprabhat.jpeg";
import Lakshya_Garg from "../../../assets/team_22-23/Lakshya_Garg.jpeg";

// import events
import intro_aiml1 from "../../../assets/club_event_pics/technical/intro_aiml1.jpeg";
import intro_aiml2 from "../../../assets/club_event_pics/technical/intro_aiml2.jpeg";
import intro_aiml3 from "../../../assets/club_event_pics/technical/intro_aiml3.jpeg";
import intro_aiml4 from "../../../assets/club_event_pics/technical/intro_aiml4.jpeg";
import kaggle_comp1 from "../../../assets/club_event_pics/technical/kaggle_competition1.jpeg";
import kaggle_comp2 from "../../../assets/club_event_pics/technical/kaggle_competition2.jpeg";
import kaggle_comp3 from "../../../assets/club_event_pics/technical/kaggle_competition3.jpeg";
import kaggle_comp4 from "../../../assets/club_event_pics/technical/kaggle_competition4.jpeg";
import kaggle_comp5 from "../../../assets/club_event_pics/technical/kaggle_competition5.jpeg";
import kaggle_comp6 from "../../../assets/club_event_pics/technical/kaggle_competition6.jpeg";
import kaggle_comp7 from "../../../assets/club_event_pics/technical/kaggle_competition7.jpeg";
import kaggle_comp8 from "../../../assets/club_event_pics/technical/kaggle_competition8.jpeg";

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
          event1Name="Kaggle Competition"
          event1Date="18 Feb 2023"
          event1Desc="Competition on Kaggle"
          event2Name="Hackathon/Quiz"
          event2Date="25 March 2023"
          event2Desc="AIML Hackathon"
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
          <Crew props={crew} />
          <Gallery props={gallery} />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default Aiml;

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
    img: Ghanta_Sai_Krishna,
    name: "G. Sai Krishna",
    post: "Club Secretary",
  },
  {
    img: Sainath,
    name: "S. Sainath Reddy",
    post: "Vice Secretary",
  },
  {
    img: A_Bhumika_Rao,
    name: "Bhumika Rao",
    post: "Core Member",
  },
  {
    img: Shivaibhav,
    name: "Shivaibhav",
    post: "Core Member",
  },
  {
    img: saiprabhat,
    name: "Sai Prabhat",
    post: "Core Member",
  },
  {
    img: Lakshya_Garg,
    name: "Lakshya Garg",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Introduction to AIML",
    date: "29 Nov 2022",
    img: [intro_aiml1, intro_aiml2, intro_aiml3, intro_aiml4],
  },
  {
    name: "Kaggle Competition",
    date: "7 Feb 2023",
    img: [
      kaggle_comp1,
      kaggle_comp2,
      kaggle_comp3,
      kaggle_comp4,
      kaggle_comp5,
      kaggle_comp6,
      kaggle_comp7,
      kaggle_comp8,
    ],
  },
];
