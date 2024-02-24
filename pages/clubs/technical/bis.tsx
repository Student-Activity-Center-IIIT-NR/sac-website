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

// import crew
import Shivaibhav from "../../../assets/team_23-24/Shivaibhav_Dewangan.jpg";
import Gaurish from "../../../assets/team_23-24/Gaurish_Ojha.jpg";
import Dhyanendra from "../../../assets/team_23-24/Dhyanendra_Tripathi.jpg";
import Swasti_Srivastava from "../../../assets/team_23-24/Swasti_Srivastava.jpeg";
import Manav_Raj from "../../../assets/team_23-24/Manav_Raj_Singh.jpg";
import Ashutosh_Jaiswal from "../../../assets/team_23-24/Ashutosh_Jaiswal.jpeg";

// import events
import bit1 from "../../../assets/club_event_pics/technical/bit1.jpeg";
import bit2 from "../../../assets/club_event_pics/technical/bit2.jpeg";
import bit3 from "../../../assets/club_event_pics/technical/bit3.jpeg";
import bit4 from "../../../assets/club_event_pics/technical/bit4.jpeg";
import bit5 from "../../../assets/club_event_pics/technical/bit5.jpeg";
import bit6 from "../../../assets/club_event_pics/technical/bit6.jpeg";
import bit7 from "../../../assets/club_event_pics/technical/bit7.jpeg";
import bit8 from "../../../assets/club_event_pics/technical/bit8.jpeg";

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
          event1Name="Bit-2-Byte"
          event1Date="March 2024"
          event1Desc="Coding Challenge"
          event2Name="Hack-a-Sol 3.0"
          event2Date="April 2024"
          event2Desc="Hackathon"
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
          {/* <Crew props={crew} /> */}
        </Box>
      </ClubsLayout>
    </>
  );
};

export default BIS;

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
    img: Shivaibhav,
    name: "Shivaibhav Dewangan",
    post: "Club Secretary",
  },
  {
    img: Gaurish,
    name: "Gaurish Ojha",
    post: "Vice Secretary",
  },
  {
    img: Dhyanendra,
    name: "Dhyaanendra Tripathi",
    post: "Core Member",
  },
  {
    img: Swasti_Srivastava,
    name: "Swasti Srivastava",
    post: "Core Member",
  },
  {
    img: Manav_Raj,
    name: "Manav Raj Singh",
    post: "Core Member",
  },
  {
    img: Ashutosh_Jaiswal,
    name: "Ashutosh Jaiswal",
    post: "Core Member",
  },
  {
    img: Dhyanendra,
    name: "Dhyaanendra Tripathi",
    post: "Core Member",
  },
  {
    img: Swasti_Srivastava,
    name: "Swasti Srivastava",
    post: "Core Member",
  },
  {
    img: Manav_Raj,
    name: "Manav Raj Singh",
    post: "Core Member",
  },
  {
    img: Ashutosh_Jaiswal,
    name: "Ashutosh Jaiswal",
    post: "Core Member",
  },
];
