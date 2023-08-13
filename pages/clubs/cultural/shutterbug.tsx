import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import shutterbugBg from "../../../assets/cultural_clubs_bg/shutterbug.png";
import shutterbugLogo from "../../../assets/cultural_clubs_bg/shutterbug_logo.jpeg";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew
import Abhijeet_Jharbade from "../../../assets/team_23-24/Male-member.jpeg";
import ACHANTA_SATYA_KARTHIK from "../../../assets/team_23-24/Satya_Karthik_Achanta.jpg";
import ANKITAN_KUMAR from "../../../assets/team_23-24/Ankitan_Kumar.jpg";
import ANUJA_SINGH_PANDAW from "../../../assets/team_23-24/Female-member.jpeg";
import APURVA_SAHU from "../../../assets/team_23-24/Apurva_Sahu.jpg";
import KARTHIKEYA_PRACHODRAN from "../../../assets/team_23-24/Male-member.jpeg";
import RIMJHIM_SHARMA from "../../../assets/team_23-24/Female-member.jpeg";
import AAYUSH_KULKARNI from "../../../assets/team_23-24/Aayush_Kulkarni.jpg";
import ARYAN_KUMAR_BAGHEL from "../../../assets/team_23-24/Aryan_Kumar_Baghel.jpg";
// import event
import bharat1 from "../../../assets/club_event_pics/cultural/bharat1.jpeg";
import bharat3 from "../../../assets/club_event_pics/cultural/bharat3.jpeg";
import bharat4 from "../../../assets/club_event_pics/cultural/bharat4.jpeg";
import bharat5 from "../../../assets/club_event_pics/cultural/bharat5.jpeg";
import bharat6 from "../../../assets/club_event_pics/cultural/bharat6.jpeg";
import ganraya1 from "../../../assets/club_event_pics/cultural/ganraya1.jpeg";
import ganraya2 from "../../../assets/club_event_pics/cultural/ganraya2.jpeg";
import ganraya3 from "../../../assets/club_event_pics/cultural/ganraya3.jpeg";
import ganraya4 from "../../../assets/club_event_pics/cultural/ganraya4.jpeg";

interface ShutterBugProps {}

const ShutterBug: FunctionComponent<ShutterBugProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Shutterbug" bg={shutterbugBg} />
        <ClubDescription img={shutterbugLogo}>
          Shutterbug is IIIT Naya Raipur&apos;s official photography club.
          <br /> This club intends to help interested students of photography to
          learn about the fundamentals of this field. It provides a supportive
          environment to students of our institute to share their knowledge and
          passion for photography. The club runs under the guidance of Dr.
          Ramakrishna Bandi. <br /> We cover all the major events that happen in
          our institute. Also, we organize various photography workshops,
          exhibitions etc.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default ShutterBug;

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
    img: Abhijeet_Jharbade,
    name: "Abhijeet Jharbade",
    post: "Head",
  },
  {
    img: ACHANTA_SATYA_KARTHIK,
    name: "Achanta Satya Karthik",
    post: "Core member",
  },
  {
    img: ANKITAN_KUMAR,
    name: "Ankitan Kumar",
    post: "Core member",
  },
  {
    img: ANUJA_SINGH_PANDAW,
    name: "Anuja Singh Pandaw",
    post: "Core member",
  },
  {
    img: APURVA_SAHU,
    name: "Apurva Sahu",
    post: "Core member",
  },
  {
    img: KARTHIKEYA_PRACHODRAN,
    name: "Karthikeya Prachodran",
    post: "Core member",
  },
  {
    img: RIMJHIM_SHARMA,
    name: "Rimjhim Sharma",
    post: "Core member",
  },
  {
    img: AAYUSH_KULKARNI,
    name: "Aayush Kulkarni",
    post: "Core member",
  },
  {
    img: ARYAN_KUMAR_BAGHEL,
    name: "Aryan Kumar Baghel",
    post: "Core member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Bharat ke Rang",
    date: "13 Jan 2023",
    img: [bharat1, bharat3, bharat4, bharat5, bharat6],
  },
  {
    name: "Jai Ganraya",
    date: "31 Aug 2022",
    img: [ganraya1, ganraya2, ganraya3, ganraya4],
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
    name: "Photography Contest",
    date: "January 26, 2023",
    desc: "Photography Contest",
    link: "",
  },
  {
    name: "Picturesque",
    date: "February 22, 2023",
    desc: "Photography Contest",
    link: "",
  },
];
