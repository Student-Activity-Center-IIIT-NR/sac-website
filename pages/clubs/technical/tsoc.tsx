import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import TechnicalClub from "../../../features/club/technical/TechnicalClub";
import ClubDescription from "../../../features/club/technical/ClubDescription";
import Box from "@mui/material/Box";
import Crew from "../../../features/club/common/Crew";
import Gallery from "../../../features/club/common/Gallery";
import tsocBg from "../../../assets/technical_clubs_bg/tsoc.png";
import tsocBgTop from "../../../assets/technical_clubs_bg/bg_tsoc_top.svg";
import tsocBgBottom from "../../../assets/technical_clubs_bg/bg_tsoc_bottom.svg";
import tsocLogo from "../../../assets/technical_clubs_bg/tsoc_logo.jpg";
import { StaticImageData } from "next/image";

// import crew
import Dhaval_Kumar from "../../../assets/team_22-23/Dhaval_Kumar-min.jpeg";
import anisha from "../../../assets/team_22-23/anisha.jpeg";
import Suyash_Sinha from "../../../assets/team_22-23/Suyash_Sinha.jpeg";
import Vedica_Mishra from "../../../assets/team_22-23/Vedica_Mishra.jpeg";
import Kapil_Soni from "../../../assets/team_22-23/Kapil_Soni.jpeg";

interface TSOCProps {}

const TSOC: FunctionComponent<TSOCProps> = () => {
  return (
    <>
      <ClubsLayout>
        <TechnicalClub
          name="TSOC"
          desc="The Society of Coders"
          bgTop={tsocBgTop}
          logo={tsocLogo}
          color={"#7AA2F7"}
          event1Name="Des Code"
          event1Date="03 Feb 2023"
          event1Desc="Coding Challenge"
          event2Name="Bit-2-Byte"
          event2Date="18 March 2023"
          event2Desc="Coding Challenge"
        />
        <ClubDescription bg={tsocBg}>
          The Society of Coders at IIIT-Naya Raipur is a student-run club that
          aims to foster a culture of coding at the college by hosting various
          events such as hackathons, workshops, and competitions. The club
          emphasizes hands-on learning and provides a platform for students to
          share their ideas and experiences with programming in a supportive
          environment. It also serves as a forum for people to share their
          ideas, thoughts, and ambitions regarding programming in an encouraging
          and conducive environment. It&apos;s a club that welcomes everyone
          from first-time coders to experienced veterans of the trade.
        </ClubDescription>
        <Box
          sx={{
            height: "fit-content",
            background: `url(${tsocBgBottom.src})`,
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

export default TSOC;

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
    img: Dhaval_Kumar,
    name: "Dhaval Kumar",
    post: "Club Secretary",
  },
  {
    img: anisha,
    name: "Anisha Agrawal",
    post: "Core Member",
  },
  {
    img: Suyash_Sinha,
    name: "Suyash Sinha",
    post: "Core Member",
  },
  {
    img: Vedica_Mishra,
    name: "Vedica Mishra",
    post: "Core Member",
  },
  {
    img: Kapil_Soni,
    name: "Kapil Soni",
    post: "Core Member",
  },
];
const gallery: GalleryProps[] = [
  {
    name: "SCIη′TFIC",
    date: "14 January 2023",
    img: [],
  },
];
