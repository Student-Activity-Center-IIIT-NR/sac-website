import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import c2cBg from "../../../assets/cultural_clubs_bg/c2c.png";
import c2cLogo from "../../../assets/cultural_clubs_bg/c2c_logo.png";
import Gallery from "../../../features/club/common/Gallery";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew
import Panshul_Senapati from "../../../assets/team_23-24/Panshul_Senapati.jpg";
import Aseem_Rai from "../../../assets/team_23-24/Aseem_Rai.jpg";
import Ashutosh_Jaiswal from "../../../assets/team_23-24/Ashutosh_Jaiswal.jpeg";
import Arman_Singh_Kshatri from "../../../assets/team_23-24/Male-member.jpeg";
import Ojash_Verma from "../../../assets/team_23-24/Male-member.jpeg";
import Simmi_Baghel from "../../../assets/team_23-24/Simmi_Baghel.jpg";


// import events
import ramp1 from "../../../assets/club_event_pics/cultural/ramp1.jpeg";
import ramp2 from "../../../assets/club_event_pics/cultural/ramp2.jpeg";
import ramp3 from "../../../assets/club_event_pics/cultural/ramp3.jpeg";
import ramp4 from "../../../assets/club_event_pics/cultural/ramp4.jpeg";

interface CoverToCoverProps {}

const CoverToCover: FunctionComponent<CoverToCoverProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Cover to Cover" bg={c2cBg} />
        <ClubDescription img={c2cLogo}>
          C2C is a literature club at IIIT Naya Raipur, that aims to promote the
          love and appreciation of literature among its members. The club
          creates a nurturing environment that encourages creativity and
          liberation by exploring different literary traditions and
          perspectives. The club&apos;s mission is to expose its members to a
          diverse array of literature and to inspire them to develop their own
          particularizing language for understanding and appreciating what they
          read. The club also encourages members to share their thoughts and
          ideas about literature and to engage in discussions about how
          literature relates to life. C2C club is a unique space for students to
          connect with literature and each other in a meaningful and
          transformative way.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default CoverToCover;

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
    img:Panshul_Senapati ,
    name: "Panshul Senapati",
    post: "Club Secretary",
  },
  {
    img: Aseem_Rai,
    name: "Aseem Rai",
    post: "Vice Secretary",
  },
  {
    img: Ashutosh_Jaiswal,
    name: "Ashutosh Jaiswal",
    post: "Core Member",
  },
  {
    img: Ojash_Verma,
    name: "Ojash Verma",
    post: "Core Member",
  },
  {
    img: Arman_Singh_Kshatri,
    name: "Arman Singh Kshatri",
    post: "Core Member",
  },
  {
    img: Simmi_Baghel,
    name: "Simmi Baghel",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Rampage",
    date: "12 Sept 2022",
    img: [ramp1, ramp2, ramp3, ramp4],
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
    name: "Zhark Tank",
    date: "March 31, 2023",
    desc: "Event based on Shark Tank",
    link: "",
  },
];
