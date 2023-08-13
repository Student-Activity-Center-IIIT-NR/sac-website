import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import tbdBg from "../../../assets/cultural_clubs_bg/tbd.png";
import tbdLogo from "../../../assets/cultural_clubs_bg/tbd_logo.jpg";
import Crew from "../../../features/club/common/Crew";
import { StaticImageData } from "next/image";

// import crew
import Shreya_Tiwari from "../../../assets/team_23-24/Shreya_Tiwari.jpg";
import Aayush_Kulkarni from "../../../assets/team_23-24/Aayush_Kulkarni.jpg";
import Aniket_Pandey from "../../../assets/team_23-24/Aniket_Pandey.jpg";
import Anoushka_Kaul from "../../../assets/team_23-24/Anoushka_koul.jpeg";
import Trisul from "../../../assets/team_23-24/Trisul.jpeg";
import Shaurya_Malhan from "../../../assets/team_23-24/Shaurya_Malhan.jpeg";

// import events
import yet1 from "../../../assets/club_event_pics/cultural/yet1.jpeg";
import yet2 from "../../../assets/club_event_pics/cultural/yet2.jpeg";
import yet3 from "../../../assets/club_event_pics/cultural/yet3.jpeg";
import yet4 from "../../../assets/club_event_pics/cultural/yet4.jpeg";

interface TakeDaBaitProps {}

const TakeDaBait: FunctionComponent<TakeDaBaitProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Take da Bait" bg={tbdBg} />
        <ClubDescription img={tbdLogo}>
          Take da Bait is a debate club at IIIT-Naya Raipur that was officially
          sanctioned under the Student Activity Council on January 5th, 2020.
          The club&apos;s purpose is to provide a platform for students to
          discuss and debate current trends and issues in the world, and to help
          members form their own opinions on these topics. The club aims to
          expose members to a wide range of facts and ideas, and to provide
          opportunities for members to share their own perspectives and to
          listen to the perspectives of others. The club is intended to help
          students connect to the changing socio-political environment of the
          world and to understand the potential advantages and disadvantages of
          technology and its impact on the world. The club believes that by
          discussing and debating important issues, members will be better
          equipped to be informed citizens and future leaders.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default TakeDaBait;

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
    img: Shreya_Tiwari,
    name: "Shreya Tiwari",
    post: "Club Secretary",
  },
  {
    img: Aayush_Kulkarni,
    name: "Aayush Kulkarni",
    post: "Vice Secretary",
  },
  {
    img: Anoushka_Kaul,
    name: "Anoushka Kaul",
    post: "Core Member",
  },
  {
    img: Trisul,
    name: "Trisul",
    post: "Core Member",
  },
  {
    img: Shaurya_Malhan,
    name: "Shaurya Malhan",

    post: "Core Member",
  },{
    img: Aniket_Pandey,
    name: "Aniket Pandey",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Yet to be Decided",
    date: "20 Jan 2023",
    img: [yet1, yet2, yet3, yet4],
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
    name: "Picture Perception & Discussion",
    date: "February 6, 2023",
    desc: "Story making based on given picture",
    link: "",
  },
  {
    name: "Swaying with Sniggers Debate",
    date: "February 17, 2023",
    desc: "Debate Competition",
    link: "",
  },
];
