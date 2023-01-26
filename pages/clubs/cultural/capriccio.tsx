import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import capriccioBg from "../../../assets/cultural_clubs_bg/capriccio.png";
import capriccioLogo from "../../../assets/cultural_clubs_bg/capriccio_logo.png";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew
import Shreedhar_Tiwari from "../../../assets/team_22-23/Shreedhar_Tiwari.jpeg";
import Jay_Deep_Singh from "../../../assets/team_22-23/Jay_Deep_Singh.jpeg";
import Matta_Venkat from "../../../assets/team_22-23/Matta_Venkat_Chirag.jpeg";
import Ajay_kumar_KC from "../../../assets/team_22-23/Ajay_Kumar_Koilathachetta.jpeg";
import Sagam_Reddy_Nanditha from "../../../assets/team_22-23/Sagam_Reddy_Nanditha.jpeg";
import Sonali_Tudu from "../../../assets/team_22-23/Sonali_Tudu.jpeg";
import Rahul_Meshram from "../../../assets/team_22-23/Rahul_Meshram.jpeg";
import Srijan_Oraont from "../../../assets/team_22-23/SrijanOraon.jpeg";

// import events
import mellow1 from "../../../assets/club_event_pics/cultural/mellow_cap1.jpeg";
import mellow2 from "../../../assets/club_event_pics/cultural/mellow_cap2.jpeg";
import mellow3 from "../../../assets/club_event_pics/cultural/mellow_cap3.jpeg";
import mellow4 from "../../../assets/club_event_pics/cultural/mellow_cap4.jpeg";

interface CapriccioProps {}

const Capriccio: FunctionComponent<CapriccioProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Capriccio" bg={capriccioBg} />
        <ClubDescription img={capriccioLogo}>
          Capriccio is a music club under SAC that encourages students to become
          immersed in the art and science of music. The club focuses on the
          creation and performance of music, emphasizing the importance of
          feeling the music in order to connect with audiences. Music has the
          power to bring people together and to create a sense of harmony and
          emotional connection. The club provides opportunities for students to
          explore their musical talents and interests, and to discover the joy
          and beauty of music. Additionally, being a part of the club allows
          students to develop a deeper understanding and appreciation for music,
          which can be an essential form of self-expression and a valuable
          companion throughout life&apos;s journey.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default Capriccio;

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
    img: Shreedhar_Tiwari,
    name: "Shreedhar Tiwari",
    post: "Club Secretary",
  },
  {
    img: Jay_Deep_Singh,
    name: "Jay Deep Singh",
    post: "Vice Secretary",
  },
  {
    img: Matta_Venkat,
    name: "Matta Venkat",
    post: "Social Media Manager",
  },
  {
    img: Ajay_kumar_KC,
    name: "Ajay kumar KC",
    post: "Core Member",
  },
  {
    img: Sagam_Reddy_Nanditha,
    name: "Sagam Reddy Nanditha",
    post: "Core Member",
  },
  {
    img: Sonali_Tudu,
    name: "Sonali Tudu",
    post: "Core Member",
  },
  {
    img: Rahul_Meshram,
    name: "Rahul Meshram",
    post: "Core Member",
  },
  {
    img: Srijan_Oraont,
    name: "Srijan Oraont",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Mellow Response",
    date: "9 May 2022",
    img: [mellow1, mellow2, mellow3, mellow4],
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
    name: "Funtakshari",
    date: "March 24, 2023",
    desc: "Antakshari with fun",
    link: "",
  },
];
