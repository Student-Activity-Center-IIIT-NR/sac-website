import React from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/technical/Crew";
import Gallery from "../../../features/club/common/Gallery";
import cometBg from "../../../assets/technical_clubs_bg/comet.png";
import cometBgTop from "../../../assets/technical_clubs_bg/bg_comet_top.svg";
import cometBgBottom from "../../../assets/technical_clubs_bg/bg_comet_bottom.svg";
import cometLogo from "../../../assets/technical_clubs_bg/comet_logo.png";

const Comet = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="Comet"
          desc=""
          bgTop={cometBgTop}
          logo={cometLogo}
          color="#FF9E64"
        />
        <ClubDescription bg={cometBg}>
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
          <Crew />
          <Gallery />
        </Box>
      </ClubsLayout>
    </>
  );
};

export default Comet;
