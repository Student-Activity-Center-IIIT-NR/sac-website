import { FunctionComponent } from "react";
import ClubsLayout from "../../../layouts/ClubsLayout";
import ClubHeader from "../../../features/club/cultural/ClubHeader";
import ClubBanner from "../../../features/club/cultural/ClubBanner";
import ClubDescription from "../../../features/club/cultural/ClubDescription";
import ClubEvents from "../../../features/club/cultural/ClubEvents";
import Gallery from "../../../features/club/common/Gallery";
import munBg from "../../../assets/cultural_clubs_bg/mun.png";
import munLogo from "../../../assets/cultural_clubs_bg/mun_logo.png";
import { StaticImageData } from "next/image";
import Crew from "../../../features/club/common/Crew";

// import crew
import Navneet_Chaubey from "../../../assets/team_22-23/navneet_chaubey.jpeg";
import Ganesh_Prajapati from "../../../assets/team_22-23/Ganesh_Prajapati.jpeg";
import Nanditha_S from "../../../assets/team_22-23/Sagam_Reddy_Nanditha.jpeg";
import Sahil_Nimsarkar from "../../../assets/team_22-23/Sahil_Ashish_Nimsarkar.jpeg";
import Aaditya_Tripathi from "../../../assets/team_22-23/Aaditya_Tripathi.jpeg";
import Aadi_Juvekar from "../../../assets/team_22-23/Aadi_Juvekar.jpeg";

// import events
import chai1 from "../../../assets/club_event_pics/cultural/chai1.jpeg";
import chai2 from "../../../assets/club_event_pics/cultural/chai2.jpeg";
import chai3 from "../../../assets/club_event_pics/cultural/chai3.jpeg";
import chai4 from "../../../assets/club_event_pics/cultural/chai4.jpeg";
import whatif1 from "../../../assets/club_event_pics/cultural/whatif1.jpeg";
import whatif2 from "../../../assets/club_event_pics/cultural/whatif2.jpeg";
import whatif3 from "../../../assets/club_event_pics/cultural/whatif3.jpeg";
import whatif4 from "../../../assets/club_event_pics/cultural/whatif4.jpeg";

interface ModelUnitedNationProps {}

const ModelUnitedNation: FunctionComponent<ModelUnitedNationProps> = () => {
  return (
    <>
      <ClubsLayout>
        <ClubHeader />
        <ClubBanner clubName="Model United Nations" bg={munBg} />
        <ClubDescription img={munLogo}>
          The IIIT NR MUN is a Model United Nations conference that provides
          delegates with a platform to discuss current global issues and to
          develop a range of skills such as public speaking, debate, writing,
          critical thinking, collaboration, and leadership. The conference
          simulates the roles of UN ambassadors and delegates engaging in
          activities such as drafting resolutions, strategizing, and negotiating
          with other delegates. The conference provides an opportunity to think
          critically and creatively, and to develop solutions to global issues.
          From having heated debates to forming alliances, this club will
          provide a platform to step into the shoes of UN ambassadors.
        </ClubDescription>
        <ClubEvents props={eventDetails} />
        <Crew props={crew} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default ModelUnitedNation;

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
    img: Navneet_Chaubey,
    name: "Navneet Chaubey",
    post: "Club Secretary",
  },
  {
    img: Ganesh_Prajapati,
    name: "Ganesh Prajapati",
    post: "Vice Secretary",
  },
  {
    img: Nanditha_S,
    name: "Nanditha S",
    post: "Core Member",
  },
  {
    img: Sahil_Nimsarkar,
    name: "Sahil Nimsarkar",
    post: "Core Member",
  },
  {
    img: Aaditya_Tripathi,
    name: "Aaditya Tripathi",
    post: "Core Member",
  },
  {
    img: Aadi_Juvekar,
    name: "Aadi Juvekar",
    post: "Core Member",
  },
];

const gallery: GalleryProps[] = [
  {
    name: "Chai Pe Charcha",
    date: "19 Jan 2023",
    img: [chai1, chai2, chai3, chai4],
  },
  {
    name: "What If",
    date: "09 Sept 2022",
    img: [whatif1, whatif2, whatif3, whatif4],
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
    desc: "Combined Event of MUN and CDT",
    link: "",
  },
  {
    name: "Inter College MUN",
    date: "15-16 April 2023",
    desc: "MUN Conference",
    link: "",
  },
];
