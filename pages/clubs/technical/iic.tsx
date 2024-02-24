import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import IICBg from "../../../assets/technical_clubs_bg/IIC.jpg";
import IICBgTop from "../../../assets/technical_clubs_bg/bg_IIC_top.png";
import IICBgBottom from "../../../assets/technical_clubs_bg/bg_IIC_bottom.png";
import IICLogo from "../../../assets/technical_clubs_bg/IIC_logo.png";
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

interface IICProps {}

const IIC: FunctionComponent<IICProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="IIC"
          desc="Institute Innovation Council"
          bgTop={IICBgTop}
          logo={IICLogo}
          color={"#BEA000"}
          event1Name="Speaker's talk"
          event1Date="March 2024"
          event1Desc="Talk by Experts"
          event2Name="Field Visit"
          event2Date="April 2024"
          event2Desc=""
        />
        <ClubDescription bg={IICBg}>
          Institution&apos;s Innovation Council (IIC) program is initiative of
          Ministry of Education (MoE) through MoE&apos;s Innovation Cell (MIC)
          in collaboration with AICTE for Higher Educational Institutions (HEIs)
          to systematically foster the culture of innovation and start-up
          ecosystem in education institutions.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${IICBgBottom.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pb: 6,
          }}
        >
          {/* <Crew props={crew} />
          <Gallery props={gallery} /> */}
        </Box>
      </ClubsLayout>
    </>
  );
};

export default IIC;

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
const gallery: GalleryProps[] = [
  {
    name: "Bit-2-Byte",
    date: "9-10 April 2022",
    img: [bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8],
  },
];
