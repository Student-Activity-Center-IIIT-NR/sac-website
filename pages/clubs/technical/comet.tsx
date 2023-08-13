import React from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import cometBg from "../../../assets/technical_clubs_bg/comet.png";
import cometBgTop from "../../../assets/technical_clubs_bg/bg_comet_top.svg";
import cometBgBottom from "../../../assets/technical_clubs_bg/bg_comet_bottom.svg";
import cometLogo from "../../../assets/technical_clubs_bg/comet_logo.png";
import { StaticImageData } from "next/image";

// import crew
import Ishita_Tegar from "../../../assets/team_23-24/Ishita_Tegar.jpg";
import Umesh_Sinha from "../../../assets/team_23-24/Umesh_Sinha.jpg";
import T_Srivedanarayana from "../../../assets/team_23-24/Male-member.jpeg";
import Alankar_Saxena from "../../../assets/team_23-24/Alankar_Saxena.jpg";
import Namita from "../../../assets/team_23-24/Namita_shah.jpg";
import Krishna_Aggarwal from "../../../assets/team_23-24/Krishna_Agrawal.jpg";

// import events
import arduino1 from "../../../assets/club_event_pics/technical/arduino1.jpeg";
import arduino2 from "../../../assets/club_event_pics/technical/arduino2.jpeg";
import arduino3 from "../../../assets/club_event_pics/technical/arduino3.jpeg";
import arduino4 from "../../../assets/club_event_pics/technical/arduino4.jpeg";

const Comet = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="Comet"
          desc="Community of Electronics"
          bgTop={cometBgTop}
          logo={cometLogo}
          color="#FF9E64"
          event1Name="Treasure Hunt"
          event1Date="March 26, 2023"
          event1Desc="Combined event of Comet and Inquizitive"
          event2Name="Raspberry Pi Workshop"
          event2Date="April 10, 2023"
          event2Desc="Workshop on R-pi"
        />
        <ClubDescription bg={cometBg} >
          The club was established in 2018 under the name CECoT (Community of
          electronics and communication techies) and was later renamed Community
          of Electronics. The club was founded by Harsh Singh, Akhil Kumar,
          Jatin Aditya, Abhay Sao, and Gargi Shukla, and was mentored by Dr.
          Debanjan Das (Asst. Prof., ECE) at IIIT-NR. The team was later
          expanded to meet the needs and goals of the club. The main objective
          of the club is to bring together like-minded individuals and find
          solutions to real-world problems using the resources available. The
          club encourages members to participate in idea-generating events and
          develop new and innovative ideas.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${cometBgBottom.src})`,
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

export default Comet;

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
    img: Ishita_Tegar,
    name: "Ishita Tegar",
    post: "Club Secretary",
  },
  {
    img: Umesh_Sinha,
    name: "Umesh Sinha",
    post: "Vice Secretary",
  },
  {
    img: Alankar_Saxena,
    name: "Alankar Saxena",
    post: "Core Member",
  },
  {
    img: Namita,
    name: "Namita Shah",
    post: "Core Member",
  },
  {
    img: Krishna_Aggarwal,
    name: "Krishna Aggarwal",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Arduino Workshop",
    date: "Jan 2023",
    img: [arduino2, arduino1, arduino4, arduino3],
  },
];
