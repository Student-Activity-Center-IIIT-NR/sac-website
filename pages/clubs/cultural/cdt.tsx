import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import cdtBg from "../../../assets/cultural_clubs_bg/cdt.png";
import cdtLogo from "../../../assets/cultural_clubs_bg/cdt_logo.png";
import { StaticImageData } from "next/image";
import Crew from "../../../features/club/common/Crew";

// import crew
import Kapil_Soni from "../../../assets/team_22-23/Kapil_Soni.jpeg";
import Vedica_Mishra from "../../../assets/team_22-23/Vedica_Mishra.jpeg";
import Matta_Venkat from "../../../assets/team_22-23/Matta_Venkat_Chirag.jpeg";
import Gautam_Gupta from "../../../assets/team_22-23/Gautam.jpeg";
import Aadi_Juvekar from "../../../assets/team_22-23/Aadi_Juvekar.jpeg";
import Shresth_Mishra from "../../../assets/team_22-23/Shresht_Mishra.jpeg";
import Jashwant_Vemula from "../../../assets/team_22-23/Male-member.jpeg";
import Shristi_Tiwari from "../../../assets/team_22-23/Shristi_Tiwari.jpeg";
import Aaditya_Tripathi from "../../../assets/team_22-23/Aaditya_Tripathi.jpeg";

// import events
import nukkad1 from "../../../assets/club_event_pics/cultural/nukkad1.jpeg";
import nukkad2 from "../../../assets/club_event_pics/cultural/nukkad2.jpeg";
import nukkad3 from "../../../assets/club_event_pics/cultural/nukkad3.jpeg";
import nukkad4 from "../../../assets/club_event_pics/cultural/nukkad4.jpeg";

interface ClubDeTheatreProps {}

const ClubDeTheatre: FunctionComponent<ClubDeTheatreProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Club De Théâtre" bg={cdtBg} />
        <ClubDescription img={cdtLogo}>
          Club De Théâtre is the drama club at IIIT-Naya Raipur that encourages
          students to participate in dramatic presentations such as skits, mime,
          plays, and street theatre. The club promotes the culture of drama,
          comedy, and other related forms of performance within the college. The
          club&apos;s goal is to provide opportunities for students to explore,
          participate, and learn as much as possible about the art of drama. The
          club serves as a platform for students to showcase their talents,
          develop their skills, and experience the joy of performance. It also
          helps in developing the students&apos; self-confidence, ability to
          express themselves, and working in a team.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default ClubDeTheatre;

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
    img: Kapil_Soni,
    name: "Kapil Soni",
    post: "Club Secretary",
  },
  {
    img: Vedica_Mishra,
    name: "Vedica Mishra",
    post: "Vice Secretary",
  },
  {
    img: Matta_Venkat,
    name: "Matta Venkat",
    post: "Social Media Manager",
  },
  {
    img: Gautam_Gupta,
    name: "Gautam Gupta",
    post: "Core Member",
  },
  {
    img: Aadi_Juvekar,
    name: "Aadi Juvekar",
    post: "Core Member",
  },
  {
    img: Shresth_Mishra,
    name: "Shresth Mishra",
    post: "Core Member",
  },
  {
    img: Jashwant_Vemula,
    name: "Jashwant Vemula",
    post: "Core Member",
  },
  {
    img: Shristi_Tiwari,
    name: "Shristi Tiwari",
    post: "Core Member",
  },
  {
    img: Aaditya_Tripathi,
    name: "Aaditya Tripathi",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Nukkad Natak",
    date: "2 Nov 2022",
    img: [nukkad1, nukkad2, nukkad3, nukkad4],
  },
];

interface EventProps {
  name: string;
  date: string;
  desc: string;
  link: string;
}

const eventDetails: EventProps[] = [
  {
    name: "Political Drama",
    date: "February 2, 2023",
    desc: "Combined Event of CDT and MUN",
    link: "",
  },
];
