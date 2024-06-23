import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import BISBg from "../../../assets/technical_clubs_bg/BIS.jpg";
import BISBgTop from "../../../assets/technical_clubs_bg/bg_BIS_top.png";
import BISBgBottom from "../../../assets/technical_clubs_bg/bg_BIS_bottom.png";
import BISLogo from "../../../assets/technical_clubs_bg/BIS_logo.png";
import { StaticImageData } from "next/image";
import { bis } from "../../../data/Crews/TechnicalClubCrew";

interface BISProps {}

const BIS: FunctionComponent<BISProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="BIS"
          desc="Bureau of Indian standards"
          bgTop={BISBgTop}
          logo={BISLogo}
          color={"#CA50F5"}
          instagram=""
        />
        <ClubDescription bg={BISBg}>
          The Bureau of Indian Standards (BIS) has a program called Standards
          Clubs in schools and colleges. The program aims to teach students the
          importance of quality, standards, and scientific temperament.
          <br /> The clubs are made up of students <br />
          and teachers, and offer <br />
          learning opportunities in <br />
          the field of quality and <br />
          standardization.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${BISBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
           <Crew props={bis} /> 
        </Box>
      </ClubsLayout>
    </>
  );
};

export default BIS;
