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
import Swastika_Satya from "../../../assets/team_23-24/Swastika_Satya.jpg";
import Vishal_Sharma from "../../../assets/team_23-24/Vishal_Sharma.jpg";
import Kanika_Malhotra from "../../../assets/team_23-24/Kanika_Malhotra -.jpg";
import Juttuka_Saaketh from "../../../assets/team_23-24/Male-member.jpeg";
import Anshu_kashyap from "../../../assets/team_23-24/Female-member.jpeg";
import Krishna_aggarwal from "../../../assets/team_23-24/Krishna_Agrawal.jpg";


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
    img: Swastika_Satya,
    name: "Swastika Satya",
    post: "Club Secretary",
  },
  {
    img: Vishal_Sharma,
    name: "Vishal Sharma",
    post: "Vice Secretary",
  },
  {
    img: Kanika_Malhotra,
    name: "Kanika Malhotra",
    post: "Core member",
  },
  {
    img: Juttuka_Saaketh,
    name: "Juttuka Saaketh",
    post: "Core Member",
  },
  {
    img: Anshu_kashyap,
    name: "Anhsu Kashyap",
    post: "Core Member",
  },
  {
    img: Krishna_aggarwal,
    name: "Krishna Aggarwal",
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
