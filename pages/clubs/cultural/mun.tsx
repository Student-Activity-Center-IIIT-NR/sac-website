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
import { mun } from "../../../data/CulturalClubCrew";
// import events
import chai1 from "../../../assets/club_event_pics/cultural/chai1.jpeg";
import chai2 from "../../../assets/club_event_pics/cultural/chai2.jpeg";
import chai3 from "../../../assets/club_event_pics/cultural/chai3.jpeg";
import chai4 from "../../../assets/club_event_pics/cultural/chai4.jpeg";
import whatif1 from "../../../assets/club_event_pics/cultural/whatif1.jpeg";
import whatif2 from "../../../assets/club_event_pics/cultural/whatif2.jpeg";
import whatif3 from "../../../assets/club_event_pics/cultural/whatif3.jpeg";
import whatif4 from "../../../assets/club_event_pics/cultural/whatif4.jpeg";
import munc1 from "../../../assets/club_event_pics/cultural/munc1.jpeg";
import munc2 from "../../../assets/club_event_pics/cultural/munc2.jpeg";
import munc3 from "../../../assets/club_event_pics/cultural/munc3.jpeg";
import munc4 from "../../../assets/club_event_pics/cultural/munc4.jpeg";
import munc5 from "../../../assets/club_event_pics/cultural/munc5.jpeg";
import munc6 from "../../../assets/club_event_pics/cultural/munc6.jpeg";
import munc7 from "../../../assets/club_event_pics/cultural/munc7.jpeg";
import munc8 from "../../../assets/club_event_pics/cultural/munc8.jpeg";

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
        <Crew props={mun} />
        <Gallery props={gallery} />
      </ClubsLayout>
    </>
  );
};

export default ModelUnitedNation;

interface GalleryProps {
  name: string;
  img: StaticImageData[];
  date: string;
}

const gallery: GalleryProps[] = [
  {
    name: "MUN Conference 2022",
    date: "7-8 May 2022",
    img: [munc1, munc2, munc3, munc4, munc5, munc6, munc7, munc8],
  },
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
