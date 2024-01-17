import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import indradhanushBg from "../../../assets/cultural_clubs_bg/indradhanush.png";
import indradhanushLogo from "../../../assets/cultural_clubs_bg/indradhanush_logo.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew
import Thanisha_Dewangan from "../../../assets/team_23-24/Thanisha _Dewangan..jpg";
import Shalini_Singh from "../../../assets/team_23-24/Shalini_Singh.jpg";
import Sanjana_Sori from "../../../assets/team_23-24/Sanjana_Sori.jpg";
import Vajrala_Akhilesh from "../../../assets/team_23-24/Male-member.jpeg";
import P_Punit from "../../../assets/team_23-24/Male-member.jpeg";
import Anjali_Daheriya from "../../../assets/team_23-24/Female-member.jpeg";

// import events
import canva1 from "../../../assets/club_event_pics/cultural/canva1.jpeg";
import canva2 from "../../../assets/club_event_pics/cultural/canva2.jpeg";
import canva3 from "../../../assets/club_event_pics/cultural/canva3.jpeg";
import canva4 from "../../../assets/club_event_pics/cultural/canva4.jpeg";

interface IndradhanushProps {}

const Indradhanush: FunctionComponent<IndradhanushProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Indradhanush" bg={indradhanushBg} />
        <ClubDescription img={indradhanushLogo}>
          Indradhanush as the name suggests is a club made to add colors to the
          routine college life. So that creativity follows right behind logic,
          symmetry, and expression. Indradhanush is a cultural club of the
          institute and is behind the beautiful artistic work behind every
          event. This club works on the power of imagination and visualization
          which is a primary solid requirement even while working with codes.
          The club recognizes the need for humans to express ideas to upgrade
          living standards.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default Indradhanush;

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

interface EventProps {
  name: string;
  date: string;
  desc: string;
  link: string;
}

const crew: CrewProps[] = [
  {
    img: Thanisha_Dewangan,
    name: "Thanisha Dewangan",
    post: "Club Secretary",
  },
  {
    img: Shalini_Singh,
    name: "Shalini Singh",
    post: "Vice Secretary",
  },
  {
    img: Sanjana_Sori,
    name: "Sanjana Sori",
    post: "Core Member",
  },
  {
    img: Vajrala_Akhilesh,
    name: "Vajrala Akhilesh",
    post: "Core Member",
  },
  {
    img: P_Punit,
    name: "P Punit",
    post: "Core Member",
  },
  {
    img: Anjali_Daheriya,
    name: "Anjali Daheriya",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "CanvaKar",
    date: "24 Sept 2022",
    img: [canva1, canva2, canva3, canva4],
  },
];

const eventDetails: EventProps[] = [
  {
    name: "Scribbles FUN",
    date: "April 9, 2023",
    desc: "Fun Scribbling Event",
    link: "",
  },
];
